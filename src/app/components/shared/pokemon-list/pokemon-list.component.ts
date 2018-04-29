import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../../domain/pokemon.model';

@Component({
  selector: 'appemon-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[]= [];

  constructor() { }

  ngOnInit() {
  }

}
