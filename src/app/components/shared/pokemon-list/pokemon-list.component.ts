import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../../domain/pokemon.model';

@Component({
  selector: 'appemon-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[]= [];
  @Output() onRemove: EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
