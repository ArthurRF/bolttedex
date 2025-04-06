import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllPokemon } from "../services/pokemon.service";
import { PokemonListType } from "../services/types";
import PokemonDetails from "./PokemonDetails";
import {
  BadgeListStyled,
  CardStyled,
  ContainerStyled,
  GridStyled,
  ImageStyled,
  SectionStyled,
  TypeBadgeStyled,
} from "./styles/SharedStyles";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<PokemonListType[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonListType | null>(null);

  const fetchMorePokemon = async () => {
    if (loading) return;

    setLoading(true);
    const limit = 20;
    const offset = page * limit;

    const newPokemon = await getAllPokemon(offset, limit);

    if (newPokemon.length === 0) {
      setHasMore(false);
    } else {
      setPokemon((prev) => [...prev, ...newPokemon]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMorePokemon();
  }, []);

  return (
    <ContainerStyled>
      <h1 style={{ color: "#ff6347", marginBottom: "20px" }}>Bolttedex</h1>
      <InfiniteScroll
        loader={<h4>Loading...</h4>}
        dataLength={pokemon.length}
        next={fetchMorePokemon}
        hasMore={hasMore}
      >
        <GridStyled>
          {pokemon.map((p) => (
            <CardStyled key={p.id} onClick={() => setSelectedPokemon(p)}>
              <ImageStyled src={p.frontImage} alt={p.name} />
              <p>{p.name}</p>
              <SectionStyled>
                <BadgeListStyled>
                  {p.types?.map((type: string) => (
                    <TypeBadgeStyled key={type}>{type}</TypeBadgeStyled>
                  )) || "Unknown"}
                </BadgeListStyled>
              </SectionStyled>
            </CardStyled>
          ))}
        </GridStyled>
      </InfiniteScroll>

      {selectedPokemon && (
        <PokemonDetails
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
    </ContainerStyled>
  );
};

export default PokemonList;
