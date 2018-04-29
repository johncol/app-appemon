import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from '../domain/pokemon.model';

@Pipe({
  name: 'filterByName'
})
export class PokemonNameFilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], nameToFilterBy?: any): any {
    if (!nameToFilterBy) {
      return pokemons;
    }
    return pokemons
      .filter(pokemon => pokemon.name.includes(nameToFilterBy));
  }

}
