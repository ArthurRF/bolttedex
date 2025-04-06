import { fireEvent, render, screen } from "@testing-library/react";
import PokemonDetails from "../PokemonDetails";

const mockPokemon = {
  id: 25,
  name: "pikachu",
  frontImage: "https://example.com/front.png",
  backImage: "https://example.com/back.png",
  types: ["electric"],
  region: "kanto",
  weaknesses: ["ground"],
};

describe("PokemonDetails", () => {
  it("renders correctly with all props", () => {
    const setSelectedPokemon = jest.fn();

    render(
      <PokemonDetails
        selectedPokemon={mockPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    );

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /type/i })).toBeInTheDocument();
    expect(screen.getByText(/electric/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /region/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/kanto/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /weaknesses/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/ground/i)).toBeInTheDocument();

    expect(screen.getByAltText(/pikachu front/i)).toHaveAttribute(
      "src",
      mockPokemon.frontImage
    );
    expect(screen.getByAltText(/pikachu back/i)).toHaveAttribute(
      "src",
      mockPokemon.backImage
    );
  });

  it("calls setSelectedPokemon(null) when clicking close", () => {
    const setSelectedPokemon = jest.fn();

    render(
      <PokemonDetails
        selectedPokemon={mockPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    );

    fireEvent.click(screen.getByText(/close/i));
    expect(setSelectedPokemon).toHaveBeenCalledWith(null);
  });
});
