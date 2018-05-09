import { Injectable } from "@angular/core";
import { PokemonMissingService } from "../../../../services/pokemon-missing.service";
import { PokemonSearchingService } from "../../../../services/pokemon-searching.service";
import { PokemonNotReleasedYetService } from "../../../../services/pokemon-not-released-yet.service";
import { MenuOption } from "../menu-option.model";
import { Pokemon } from "../../../../domain/pokemon.model";

@Injectable()
export class OptionsMenuService {
  options: MenuOption[];

  constructor(
    private pokemonMissing: PokemonMissingService,
    private pokemonSearching: PokemonSearchingService,
    private pokemonNotReleasedYet: PokemonNotReleasedYetService) {
      this.initDefaultOptions();
  }

  getDefaultOptions(): MenuOption[] {
    return this.options;
  }

  private initDefaultOptions(): void {
    this.options = [
      MenuOption.for('Send to missing', ' sent to missing list', (pokemon: Pokemon) => this.pokemonMissing.add(pokemon.id)),
      MenuOption.for('Send to searching', ' sent to searching list', (pokemon: Pokemon) => this.pokemonSearching.add(pokemon.id)),
      MenuOption.for('Send to not released yet', ' sent to not released yet list', (pokemon: Pokemon) => this.pokemonNotReleasedYet.add(pokemon.id))
    ];
  }

}
