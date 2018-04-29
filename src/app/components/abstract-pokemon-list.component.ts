import { OnInit } from '@angular/core';
import 'rxjs/add/operator/concatMap';

import { Pokemon } from '../domain/pokemon.model';
import { PokemonApiService } from '../services/pokemon-api.service';
import { PokemonListService } from '../services/pokemon-list.service';

export abstract class AbstractPokemonListComponent implements OnInit {

  constructor(
    private pokemonService: PokemonListService,
    private pokemonApi: PokemonApiService
  ) { }

  abstract saveResponse(pokemons: Pokemon[]): void;

  ngOnInit() {
    this.pokemonService.pokemonsSubject
      .concatMap(ids => this.pokemonApi.getByIds(ids))
      .subscribe(pokemons => this.saveResponse(pokemons));
  }

  remove(pokemon: Pokemon): void {
    this.pokemonService.remove(pokemon.id);
  }

}
