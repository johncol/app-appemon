import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { PokemonStorageService } from './pokemon-storage.service';

export abstract class PokemonListService {
  private _pokemonIds: number[];
  private _pokemonsSubject: Subject<number[]>;

  protected abstract getListKey(): string;

  constructor(private storage: PokemonStorageService) {}

  add(pokemonId: number): void {
    this.initStateIfRequired();
    if (!this._pokemonIds.includes(pokemonId)) {
      this.operateOnList(() => this._pokemonIds.push(pokemonId));
    }
  }

  remove(pokemonId: number): void {
    this.initStateIfRequired();
    const index: number = this._pokemonIds.indexOf(pokemonId);
    if (index !== -1) {
      this.operateOnList(() => this._pokemonIds.splice(index, 1));
    }
  }

  get pokemonIds(): number[] {
    return [...this._pokemonIds];
  }

  get pokemonsSubject(): Subject<number[]> {
    this.initStateIfRequired();
    return this._pokemonsSubject;
  }
  
  private initStateIfRequired(): void {
    if (this.stateHasNotBeenInitialized()) {
      this.initializeState();
    }
  }

  private stateHasNotBeenInitialized(): boolean {
    return this._pokemonsSubject == null;
  }
  
  private initializeState(): void {
    this._pokemonIds = this.getFromStorage();
    this._pokemonsSubject = new BehaviorSubject(this.pokemonIds);
  }

  private operateOnList(listOperation: () => void): void {
    listOperation();
    this.saveInStorage();
    this._pokemonsSubject.next(this.pokemonIds);
  }

  private getFromStorage(): number[] {
    return this.storage.get(this.getListKey());
  }

  private saveInStorage(): void {
    this.storage.save(this.getListKey(), this.pokemonIds);
  }

}
