import { Component, OnInit } from '@angular/core';

import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonNotReleasedYetService } from '../../services/pokemon-not-released-yet.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list/abstract-pokemon-list.component';

@Component({
  templateUrl: './../abstract-pokemon-list/abstract-pokemon-list.component.html'
})
export class PokemonNotReleasedYetComponent extends AbstractPokemonListComponent implements OnInit {

  constructor(pokemonService: PokemonNotReleasedYetService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }
}
