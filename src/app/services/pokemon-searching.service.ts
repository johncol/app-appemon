import { Injectable } from '@angular/core';

import { PokemonStorageService } from './pokemon-storage.service';
import { PokemonListService } from './pokemon-list.service';

@Injectable()
export class PokemonSearchingService extends PokemonListService {

  constructor(private storage: PokemonStorageService) {
    super();
  }

  protected getFromStorage(): number[] {
    return this.storage.searching();
  }

  protected saveInStorage(): void {
    this.storage.saveSearching(this.pokemonIds);
  }

}
  