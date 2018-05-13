export class PokemonList {
  static readonly missing: string = 'missing';
  static readonly searching: string = 'searching';
  static readonly notReleasedYet: string = 'notReleasedYet';
  static readonly missingGender: string = 'missingGender';

  static get all(): string[] {
    return [PokemonList.missing, PokemonList.searching, PokemonList.notReleasedYet, PokemonList.missingGender];
  }
}
