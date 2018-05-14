import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/interval';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/take';

import * as Pokedex from 'pokeapi-js-wrapper';

import { PokemonMapper } from './pokemon.mapper';
import { Pokemon } from '../domain/pokemon.model';
import { PokemonResource } from '../api/pokemon.resource';

const pokemonApiHttpOptions: any = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true
};

const DEFAULT_CHUNK_SIZE: number = 3;
const INTERVAL_BETWEEN_REQUESTS: number = 500;

@Injectable()
export class PokemonApiService {
  private api: any;
  private resourcePath: string = '/api/v2/pokemon/';
  
  constructor(private mapper: PokemonMapper) {
    this.api = new Pokedex.Pokedex(pokemonApiHttpOptions);
  }

  getById(id: number): Observable<Pokemon> {
    return this.requestOnePokemonUsing(id);
  }

  getByName(name: string): Observable<Pokemon> {
    return this.requestOnePokemonUsing(name.toLowerCase());
  }

  getByIds(ids: number[]): Observable<Pokemon[]> {
    return this.requestPokemonUsing(ids);
  }

  getByNames(names: string[]): Observable<Pokemon[]> {
    return this.requestPokemonUsing(names.map(name => name.toLowerCase()));
  }

  private requestOnePokemonUsing(identifier: any): Observable<Pokemon> {
    return this.requestPokemonUsing([identifier])
      .map(pokemons => pokemons.length > 0 ? pokemons[0] : null);
  }

  private requestPokemonUsing(identifiers: any[]): Observable<Pokemon[]> {
    if (!identifiers || identifiers.length === 0) {
      return Observable.of([]);
    }
    const resources: string[] = identifiers.map(identifier => this.resourcePath + identifier);
    return Observable.fromPromise(this.api.resource(resources))
      .map(resource => this.mapper.mapAll(<PokemonResource[]>resource))
      .catch(error => Observable.of([]));
  }

  private requestPokemonUsingChunks(identifiers: any[], byChunksOf: number = DEFAULT_CHUNK_SIZE): Observable<Pokemon[]> {
    return Observable.interval(INTERVAL_BETWEEN_REQUESTS)
      .take(identifiers.length)
      .map(i => identifiers[i])
      .map(identifier => this.resourcePath + identifier)
      .bufferCount(byChunksOf)
      .map(resource => this.api.resource(resource))
      .concatMap(resourcePromise => Observable.fromPromise(resourcePromise))
      .map(pokemonResource => <PokemonResource[]>pokemonResource)
      .map(pokemonResource => this.mapper.mapAll(pokemonResource));
  }

}
