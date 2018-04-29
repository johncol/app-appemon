import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../domain/pokemon.model';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonMissingService } from '../../services/pokemon-missing.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list.component';

@Component({
  selector: 'appemon-pokemon-missing',
  templateUrl: './pokemon-missing.component.html',
  styleUrls: ['./pokemon-missing.component.scss']
})
export class PokemonMissingComponent extends AbstractPokemonListComponent implements OnInit {
  missingPokemons: Pokemon[] = [];

  constructor(pokemonService: PokemonMissingService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }

  saveResponse(pokemons: Pokemon[]): void {
    this.missingPokemons = pokemons;
  }

}
