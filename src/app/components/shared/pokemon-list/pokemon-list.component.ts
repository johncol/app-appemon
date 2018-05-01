import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pokemon } from '../../../domain/pokemon.model';
import { PokemonListSnackBarService } from './services/pokemon-list-snack-bar.service';

@Component({
  selector: 'appemon-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonListSnackBarService]
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[]= [];
  @Output() onRemove: EventEmitter<Pokemon> = new EventEmitter();
  @Output() onUndoRemove: EventEmitter<Pokemon> = new EventEmitter();

  constructor(private snackBar: PokemonListSnackBarService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  removePokemon(pokemon: Pokemon): void {
    this.onRemove.emit(pokemon);
    this.snackBar.displaySnackBarFor(pokemon)
      .onUndo(() => this.onUndoRemove.emit(pokemon));
  }

}
