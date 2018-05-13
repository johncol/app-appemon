import { Component, OnInit } from '@angular/core';

import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonMissingGenderService } from '../../services/pokemon-missing-gender.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list.component';

@Component({
  templateUrl: './pokemon-missing-gender.component.html'
})
export class PokemonMissingGenderComponent extends AbstractPokemonListComponent implements OnInit {

  constructor(pokemonService: PokemonMissingGenderService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }
}
