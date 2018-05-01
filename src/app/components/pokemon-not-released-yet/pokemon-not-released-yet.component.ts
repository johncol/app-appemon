import { Component, OnInit } from '@angular/core';

import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonNotReleasedYetService } from '../../services/pokemon-not-released-yet.service';
import { AbstractPokemonListComponent } from '../abstract-pokemon-list.component';

@Component({
  selector: 'appemon-pokemon-not-released-yet',
  templateUrl: './pokemon-not-released-yet.component.html',
  styleUrls: ['./pokemon-not-released-yet.component.scss']
})
export class PokemonNotReleasedYetComponent extends AbstractPokemonListComponent implements OnInit {

  constructor(pokemonService: PokemonNotReleasedYetService, pokemonApi: PokemonApiService) {
    super(pokemonService, pokemonApi);
  }
}
