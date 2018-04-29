import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../domain/pokemon.model';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonSearchingService } from '../../services/pokemon-searching.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list.component';

@Component({
  selector: 'appemon-pokemon-searching',
  templateUrl: './pokemon-searching.component.html',
  styleUrls: ['./pokemon-searching.component.scss']
})
export class PokemonSearchingComponent extends AbstractPokemonListComponent implements OnInit {
  searchingPokemons: Pokemon[] = [];

  constructor(pokemonService: PokemonSearchingService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }

  saveResponse(pokemons: Pokemon[]): void {
    this.searchingPokemons = pokemons;
  }

}
