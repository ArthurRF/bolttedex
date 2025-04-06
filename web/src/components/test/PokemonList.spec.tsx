import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { getAllPokemon } from "../../services/pokemon.service";
import PokemonList from "../PokemonList";

jest.mock("../../services/pokemon.service");

const mockedGetAllPokemon = getAllPokemon as jest.MockedFunction<
  typeof getAllPokemon
>;

describe("PokemonList", () => {
  beforeEach(() => {
    mockedGetAllPokemon.mockResolvedValue([
      {
        id: 1,
        name: "pikachu",
        frontImage: "https://example.com/front.png",
        backImage: "https://example.com/back.png",
        type: "electric",
        region: "kanto",
        weaknesses: ["ground"],
      },
    ]);
  });

  it("renders list and opens details on click", async () => {
    render(<PokemonList />);

    expect(await screen.findByText("pikachu")).toBeInTheDocument();

    expect(screen.getByAltText("pikachu")).toHaveAttribute(
      "src",
      "https://example.com/front.png"
    );

    fireEvent.click(screen.getByText("pikachu"));

    await waitFor(() => {
      expect(screen.getByText(/type:/i)).toBeInTheDocument();
    });
  });
});
