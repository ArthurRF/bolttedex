export type PokemonListType = {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  types: Array<string>;
  region: string;
  weaknesses: Array<string>;
};

export type PokemonDetailsType = {
  id: number;
  name: string;
  types: Array<string>;
  sprites: {
    front: string;
    back: string;
  };
  region: string;
  weaknesses: Array<string>;
};
