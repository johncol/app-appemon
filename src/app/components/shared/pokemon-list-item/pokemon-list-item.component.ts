import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pokemon } from '../../../domain/pokemon.model';
import { MenuOption } from '../options-menu/menu-option.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'appemon-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() removeable: boolean;
  @Input() displayOptions: boolean;
  @Output() onRemove: EventEmitter<Pokemon> = new EventEmitter();
  private snackBarConfig: MatSnackBarConfig = {
    duration: 2000
  };

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  executeAction(option: MenuOption): void {
    option.action(this.pokemon);
    this.snackBar.open(`${this.pokemon.name}${option.notification}`, null, this.snackBarConfig);
  }

}
