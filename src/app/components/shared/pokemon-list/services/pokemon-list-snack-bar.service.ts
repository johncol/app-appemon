import { Injectable } from "@angular/core";
import { MatSnackBarRef, MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { Subscription } from "rxjs/Subscription";

import { Pokemon } from "../../../../domain/pokemon.model";

@Injectable()
export class PokemonListSnackBarService {
  private snackBarConfig: MatSnackBarConfig = {
    duration: 2000
  };

  constructor(public snackBar: MatSnackBar) { }

  displaySnackBarFor(pokemon: Pokemon): PokemonListSnackBarUndoableAction {
    const snackBarRef: MatSnackBarRef<any> = this.snackBar.open(`${pokemon.name} removed from list`, 'Undo', this.snackBarConfig);
    return PokemonListSnackBarUndoableAction.for(snackBarRef);
  }
}

class PokemonListSnackBarUndoableAction {

  constructor(private snackBarRef: MatSnackBarRef<any>) { }

  static for(snackBarRef: MatSnackBarRef<any>): PokemonListSnackBarUndoableAction {
    return new PokemonListSnackBarUndoableAction(snackBarRef)
  }

  onUndo(undoCallback: () => void): void {
    const subscription: Subscription = this.snackBarRef.onAction()
      .subscribe(() => {
        undoCallback();
        subscription.unsubscribe();
      });
  }
}