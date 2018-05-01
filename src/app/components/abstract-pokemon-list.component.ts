import { OnInit } from '@angular/core';
import 'rxjs/add/operator/concatMap';

import { Pokemon } from '../domain/pokemon.model';
import { PokemonApiService } from '../services/pokemon-api.service';
import { PokemonListService } from '../services/pokemon-list.service';

export abstract class AbstractPokemonListComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private pokemonService: PokemonListService,
    private pokemonApi: PokemonApiService
  ) { }

  ngOnInit() {
    this.pokemonService.pokemonsSubject
      .concatMap(ids => this.pokemonApi.getByIds(ids))
      .map(pokemons => pokemons.sort((pokemon1, pokemon2) => pokemon1.id < pokemon2.id ? -1 : 1))
      .subscribe(pokemons => this.pokemonList = pokemons);
  }

  add(pokemon: Pokemon): void {
    this.pokemonService.add(pokemon.id);
  }

  remove(pokemon: Pokemon): void {
    this.pokemonService.remove(pokemon.id);
  }

}
