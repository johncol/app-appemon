import { Injectable } from '@angular/core';

import { PokemonStorageService } from './pokemon-storage.service';
import { PokemonListService } from './pokemon-list.service';

@Injectable()
export class PokemonMissingService extends PokemonListService {

  constructor(private storage: PokemonStorageService) {
    super();
  }

  protected getFromStorage(): number[] {
    return this.storage.missing();
  }

  protected saveInStorage(): void {
    this.storage.saveMissing(this.pokemonIds);
  }

}
