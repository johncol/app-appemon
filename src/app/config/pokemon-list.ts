export class PokemonList {
  static readonly missing: string = 'missing';
  static readonly searching: string = 'searching';

  static get all(): string[] {
    return [PokemonList.missing, PokemonList.searching];
  }
}
