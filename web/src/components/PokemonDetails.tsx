import { PokemonListType } from "../services/types";
import {
  BadgeListStyled,
  CloseButtonStyled,
  DetailImageStyled,
  DividerStyled,
  LabelStyled,
  ModalContentStyled,
  ModalStyled,
  PokemonNameStyled,
  SectionStyled,
  TypeBadgeStyled,
} from "./styles/SharedStyles";

const PokemonDetails = ({
  selectedPokemon,
  setSelectedPokemon,
}: {
  selectedPokemon: PokemonListType;
  setSelectedPokemon: React.Dispatch<
    React.SetStateAction<PokemonListType | null>
  >;
}) => {
  return (
    <ModalStyled onClick={() => setSelectedPokemon(null)}>
      <ModalContentStyled onClick={(e) => e.stopPropagation()}>
        <PokemonNameStyled>{selectedPokemon.name}</PokemonNameStyled>

        <SectionStyled style={{ justifyContent: "center", gap: "20px" }}>
          <DetailImageStyled
            src={selectedPokemon.frontImage}
            alt={`${selectedPokemon.name} front`}
          />
          <DetailImageStyled
            src={selectedPokemon.backImage}
            alt={`${selectedPokemon.name} back`}
          />
        </SectionStyled>

        <DividerStyled />

        <SectionStyled>
          <LabelStyled>Type:</LabelStyled>
          <BadgeListStyled>
            {selectedPokemon.types?.map((type: string) => (
              <TypeBadgeStyled key={type}>{type}</TypeBadgeStyled>
            )) || "Unknown"}
          </BadgeListStyled>
        </SectionStyled>

        <DividerStyled />

        <SectionStyled>
          <LabelStyled>Region:</LabelStyled>
          <p>{selectedPokemon.region || "Unknown"}</p>
        </SectionStyled>

        <DividerStyled />

        <SectionStyled>
          <LabelStyled>Weaknesses:</LabelStyled>
          <BadgeListStyled>
            {selectedPokemon.weaknesses?.length > 0
              ? selectedPokemon.weaknesses.map((w: string) => (
                  <TypeBadgeStyled key={w}>{w}</TypeBadgeStyled>
                ))
              : "Unknown"}
          </BadgeListStyled>
        </SectionStyled>

        <CloseButtonStyled onClick={() => setSelectedPokemon(null)}>
          Close
        </CloseButtonStyled>
      </ModalContentStyled>
    </ModalStyled>
  );
};

export default PokemonDetails;
