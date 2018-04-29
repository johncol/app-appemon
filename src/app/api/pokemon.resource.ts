import { Sprites } from './sprites.resource';
import { PokemonType } from './pokemon-type.resource';

export interface PokemonResource {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokemonType[];
  moves: any[];
  forms: any[];
  abilities: any[];
  stats: any[];
}
