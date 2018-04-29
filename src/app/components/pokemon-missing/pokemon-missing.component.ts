import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../domain/pokemon.model';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'appemon-pokemon-missing',
  templateUrl: './pokemon-missing.component.html',
  styleUrls: ['./pokemon-missing.component.scss']
})
export class PokemonMissingComponent implements OnInit {
  ids: number[] = [173, 204, 209];
  missingPokemons: Pokemon[] = [];

  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit() {
    this.pokemonApi.getByIds(this.ids)
      .subscribe(pokemons => this.missingPokemons = pokemons);
  }

}
