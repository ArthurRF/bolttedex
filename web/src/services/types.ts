export type PokemonListType = {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  types: string[];
  region: string;
  weaknesses: string[];
};

export type PokemonDetailsType = {
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
