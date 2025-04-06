import axios from "axios";
import { getCache, setCache } from "../cache/redis-client";
import {
  IFetchAllPokemonsResult,
  IFetchPokemonDetailsResult,
  PokemonDetail,
  PokemonListType,
  PokemonTypeDetail,
} from "./types";

export const fetchAllPokemon = async (
  offset = 0,
  limit = 20
): Promise<IFetchAllPokemonsResult[]> => {
  const cacheKey = `all_pokemons_${offset}_${limit}`;
  const cachedData = await getCache(cacheKey);
  if (cachedData) return JSON.parse(cachedData);

  const { data }: { data: PokemonListType } = await axios.get(
    `${process.env.POKE_API_URL}/pokemon?offset=${offset}&limit=${limit}`
  );

  const formattedData = await Promise.all(
    data.results.map(async (p) => {
      const details = await fetchPokemonDetails(p.name);
      return {
        id: details.id,
        name: p.name,
        frontImage: details.sprites.front,
        backImage: details.sprites.back,
        types: details.types,
        region: details.region,
        weaknesses: details.weaknesses,
      };
    })
  );

  await setCache(cacheKey, JSON.stringify(formattedData), 3600);
  return formattedData;
};

export const fetchPokemonDetails = async (
  name: string
): Promise<IFetchPokemonDetailsResult> => {
  const cacheKey = `pokemon_${name}`;
  const cachedData = await getCache(cacheKey);
  if (cachedData) return JSON.parse(cachedData);

  const { data }: { data: PokemonDetail } = await axios.get(
    `${process.env.POKE_API_URL}/pokemon/${name}`
  );

  const speciesData = await axios.get(data.species.url);
  const region = speciesData.data.generation.name;
  const weaknesses = await getWeaknesses(data.types.map((t) => t.type.name));

  const formattedData = {
    id: data.id,
    name: data.name,
    types: data.types.map((t) => t.type.name),
    sprites: {
      front: data.sprites.front_default,
      back: data.sprites.back_default,
    },
    region,
    weaknesses,
  };

  await setCache(cacheKey, JSON.stringify(formattedData), 3600);
  return formattedData;
};

const getWeaknesses = async (types: string[]): Promise<string[]> => {
  const weaknessesSet = new Set<string>();

  for (const type of types) {
    const { data }: { data: PokemonTypeDetail } = await axios.get(
      `${process.env.POKE_API_URL}/type/${type}`
    );
    data.damage_relations.double_damage_from.forEach((t) =>
      weaknessesSet.add(t.name)
    );
  }

  return Array.from(weaknessesSet);
};
