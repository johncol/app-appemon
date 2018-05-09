import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../../domain/pokemon.model';

@Component({
  selector: 'appemon-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() removeable: boolean = true;
  @Output() onRemove: EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
