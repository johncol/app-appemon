import { Injectable } from '@angular/core';

import { PokemonStorageService } from './pokemon-storage.service';
import { PokemonListService } from './pokemon-list.service';

@Injectable()
export class PokemonNotReleasedYetService extends PokemonListService {

  constructor(private storage: PokemonStorageService) {
    super();
  }

  protected getFromStorage(): number[] {
    return this.storage.notReleasedYet();
  }

  protected saveInStorage(): void {
    this.storage.saveNotReleasedYet(this.pokemonIds);
  }

}
