import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../domain/pokemon.model';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonNotReleasedYetService } from '../../services/pokemon-not-released-yet.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list.component';

@Component({
  selector: 'appemon-pokemon-not-released-yet',
  templateUrl: './pokemon-not-released-yet.component.html',
  styleUrls: ['./pokemon-not-released-yet.component.scss']
})
export class PokemonNotReleasedYetComponent extends AbstractPokemonListComponent implements OnInit {
  notReleasedYetPokemons: Pokemon[] = [];

  constructor(pokemonService: PokemonNotReleasedYetService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }

  saveResponse(pokemons: Pokemon[]): void {
    this.notReleasedYetPokemons = pokemons;
  }

}
