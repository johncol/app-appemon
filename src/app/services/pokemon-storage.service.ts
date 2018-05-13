import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

import { environment } from '../../environments/environment';
import { PokemonList } from '../config/pokemon-list';

interface PokemonListKeys<T> {
  missing: T;
  searching: T;
  notReleasedYet: T;
  missingGender: T;
}

const STORAGE_KEY: PokemonListKeys<string> = {
  missing: 'pokemon-missing',
  searching: 'pokemon-searching',
  notReleasedYet: 'pokemon-not-released-yet',
  missingGender: 'pokemon-missing-gender'
};

const DEFAULT_LIST: PokemonListKeys<number[]> = {
  missing: [173, 204, 209],
  searching: [272, 346, 348, 373, 376],
  notReleasedYet: [235, 251, 290, 291, 292, 327, 352, 366, 367, 368, 377, 378, 379, 385, 386],
  missingGender: []
};

@Injectable()
export class PokemonStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.initLists();
  }

  get(pokemonList: string): number[] {
    return this.storage.get(STORAGE_KEY[pokemonList]);
  }

  save(pokemonList: string, ids: number[]): void {
    this.storage.set(STORAGE_KEY[pokemonList], ids);
  }

  private initLists(): void {
    PokemonList.all
      .forEach(listName => this.initSingleListIfEmptyWith(STORAGE_KEY[listName], DEFAULT_LIST[listName]));
  }

  private initSingleListIfEmptyWith(key: string, defaultList: number[]): void {
    const storageList: number[] = this.storage.get(key);
    if (storageList == null || environment.resetStorage) {
      this.storage.set(key, defaultList);
    }
  }

}
