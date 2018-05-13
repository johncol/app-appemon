import { Component, OnInit } from '@angular/core';

import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonSearchingService } from '../../services/pokemon-searching.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list/abstract-pokemon-list.component';

@Component({
  templateUrl: './../abstract-pokemon-list/abstract-pokemon-list.component.html'
})
export class PokemonSearchingComponent extends AbstractPokemonListComponent implements OnInit {

  constructor(pokemonService: PokemonSearchingService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }
}
