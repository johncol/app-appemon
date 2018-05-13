import { Injectable } from "@angular/core";

import { PokemonMissingService } from "../../../../services/pokemon-missing.service";
import { PokemonSearchingService } from "../../../../services/pokemon-searching.service";
import { PokemonNotReleasedYetService } from "../../../../services/pokemon-not-released-yet.service";
import { PokemonMissingGenderService } from "../../../../services/pokemon-missing-gender.service";
import { MenuOption } from "../menu-option.model";
import { Pokemon } from "../../../../domain/pokemon.model";
import { PokemonListService } from "../../../../services/pokemon-list.service";

@Injectable()
export class OptionsMenuService {
  options: MenuOption[];

  constructor(
    private pokemonMissing: PokemonMissingService,
    private pokemonSearching: PokemonSearchingService,
    private pokemonNotReleasedYet: PokemonNotReleasedYetService,
    private pokemonMissingGender: PokemonMissingGenderService) {
      this.initDefaultOptions();
  }

  getDefaultOptions(): MenuOption[] {
    return this.options;
  }

  private initDefaultOptions(): void {
    this.options = [
      this.buildMenuOptionFor('missing', this.pokemonMissing),
      this.buildMenuOptionFor('searching', this.pokemonSearching),
      this.buildMenuOptionFor('not released yet', this.pokemonNotReleasedYet),
      this.buildMenuOptionFor('missing gender', this.pokemonMissingGender)
    ];
  }

  private buildMenuOptionFor(list: string, service: PokemonListService): MenuOption {
    return MenuOption.for(`Send to ${list}`, ` sent to ${list} list`, (pokemon: Pokemon) => service.add(pokemon.id));
  }

}
