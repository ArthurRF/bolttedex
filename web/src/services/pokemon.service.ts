import axios from "axios";
import { PokemonDetailsType, PokemonListType } from "./types";

const API_URL = `${process.env.REACT_APP_POKE_API_URL}/pokemon`;

export const getAllPokemon = async (
  offset: number,
  limit: number
): Promise<Array<PokemonListType>> => {
  const { data } = await axios.get(
    `${API_URL}?offset=${offset}&limit=${limit}`
  );
  return data;
};

export const getPokemonDetails = async (
  name: string
): Promise<PokemonDetailsType> => {
  const { data } = await axios.get(`${API_URL}/${name}`);
  return data;
};
