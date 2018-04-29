import { Injectable } from '@angular/core';

import { PokemonResource } from '../api/pokemon.resource';
import { Pokemon } from '../domain/pokemon.model';

@Injectable()
export class PokemonMapper {

  constructor() { }

  map(resource: PokemonResource): Pokemon {
    return {
      id: resource.id,
      name: resource.name,
      imgUrl: resource.sprites.front_default,
      types: resource.types.map(type => type.type.name)
    };
  }

  mapAll(resources: PokemonResource[]): Pokemon[] {
    return resources.map(resource => this.map(resource));
  }

}
