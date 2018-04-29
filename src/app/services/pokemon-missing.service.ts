import { Injectable } from '@angular/core';

import { PokemonStorageService } from './pokemon-storage.service';
import { PokemonListService } from './pokemon-list.service';
import { PokemonList } from '../config/pokemon-list';

@Injectable()
export class PokemonMissingService extends PokemonListService {

  constructor(storage: PokemonStorageService) {
    super(storage);
  }

  protected getListKey(): string {
    return PokemonList.missing;
  }

}
