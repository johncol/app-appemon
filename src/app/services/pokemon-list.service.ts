import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

export abstract class PokemonListService {
  private _pokemonIds: number[];
  private _pokemonsSubject: Subject<number[]>;

  protected abstract getFromStorage(): number[];

  protected abstract saveInStorage(): void;

  add(pokemonId: number): void {
    if (!this._pokemonIds.includes(pokemonId)) {
      this.operateOnList(() => this._pokemonIds.push(pokemonId));
    }
  }

  remove(pokemonId: number): void {
    const index: number = this._pokemonIds.indexOf(pokemonId);
    if (index !== -1) {
      this.operateOnList(() => this._pokemonIds.splice(index, 1));
    }
  }

  get pokemonIds(): number[] {
    return [...this._pokemonIds];
  }

  get pokemonsSubject(): Subject<number[]> {
    if (this.stateHasNotBeenInitialized()) {
      this.initializeState();
    }
    return this._pokemonsSubject;
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

}
