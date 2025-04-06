export type PokemonListType = {
  count: number;
  next?: string;
  previous?: string;
  results: Array<{
    name: string;
    url: string;
  }>;
};

export interface PokemonDetail {
  id: number;
  name: string;
  sprites: PokemonDetailSprites;
  species: PokemonDetailSpecies;
  types: PokemonDetailType[];
}

export interface PokemonDetailSpecies {
  name: string;
  url: string;
}

export interface PokemonDetailType {
  slot: number;
  type: PokemonDetailTypeType;
}

export interface PokemonDetailTypeType {
  name: string;
  url: string;
}

export interface PokemonDetailSprites {
  back_default: string;
  front_default: string;
}

export interface PokemonTypeDetail {
  damage_relations: PokemonTypeDetailDamageRelations;
}

export interface PokemonTypeDetailDamageRelations {
  double_damage_from: PokemonTypeDetailDoubleDamageFrom[];
}

export interface PokemonTypeDetailDoubleDamageFrom {
  name: string;
  url: string;
}

export type IFetchAllPokemonsResult = {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  types: string[];
  region: string;
  weaknesses: string[];
};

export type IFetchPokemonDetailsResult = {
  id: number;
  name: string;
  types: string[];
  sprites: {
    front: string;
    back: string;
  };
  region: string;
  weaknesses: string[];
};
