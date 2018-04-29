import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

import { PokemonList } from '../config/pokemon-list';

interface PokemonListKeys<T> {
  missing: T;
  searching: T;
}

const STORAGE_KEY: PokemonListKeys<string> = {
  missing: 'pokemon-missing',
  searching: 'pokemon-searching'
};

const DEFAULT_LIST: PokemonListKeys<number[]> = {
  missing: [173, 204, 209],
  searching: [272, 346, 348, 373, 376]
};

@Injectable()
export class PokemonStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.initLists();
  }

  missing(): number[] {
    return this.storage.get(STORAGE_KEY.missing);
  }

  searching(): number[] {
    return this.storage.get(STORAGE_KEY.searching);
  }

  saveMissing(ids: number[]): void {
    this.storage.set(STORAGE_KEY.missing, ids);
  }

  saveSearching(ids: number[]): void {
    this.storage.set(STORAGE_KEY.searching, ids);
  }

  private initLists(): void {
    PokemonList.all
      .forEach(listName => this.initSingleListIfEmptyWith(STORAGE_KEY[listName], DEFAULT_LIST[listName]));
  }

  private initSingleListIfEmptyWith(key: string, defaultList: number[]): void {
    const storageList: number[] = this.storage.get(key);
    if (storageList == null) {
      this.storage.set(key, defaultList);
    }
  }

}
