import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../domain/pokemon.model';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'appemon-pokemon-searching',
  templateUrl: './pokemon-searching.component.html',
  styleUrls: ['./pokemon-searching.component.scss']
})
export class PokemonSearchingComponent implements OnInit {
  ids: number[] = [272, 346, 348, 373, 376];
  searchingPokemons: Pokemon[] = [];

  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit() {
    this.pokemonApi.getByIds(this.ids)
      .subscribe(pokemons => this.searchingPokemons = pokemons);
  }

}
