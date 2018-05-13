import { Component, OnInit } from '@angular/core';

import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonMissingService } from '../../services/pokemon-missing.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list/abstract-pokemon-list.component';

@Component({
  templateUrl: './../abstract-pokemon-list/abstract-pokemon-list.component.html'
})
export class PokemonMissingComponent extends AbstractPokemonListComponent implements OnInit {

  constructor(pokemonService: PokemonMissingService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }
}
