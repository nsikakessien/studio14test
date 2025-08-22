import { render, screen, fireEvent } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "../App";
import ResourceProvider from "../context/resource/resourceContextProvider";

function renderWithChakra(ui: React.ReactNode) {
  return render(
    <ChakraProvider>
      <ResourceProvider>{ui}</ResourceProvider>
    </ChakraProvider>
  );
}

describe("Resources App", () => {
  it("renders header and hero correctly", () => {
    renderWithChakra(<App />);
    const headers = screen.getAllByText(/Resources/i);
    expect(headers.length).toBeGreaterThan(0);
  });

  it("shows search input", () => {
    renderWithChakra(<App />);
    expect(
      screen.getByPlaceholderText(/Search by title or keyword/i)
    ).toBeInTheDocument();
  });

  it("filters resources by search input", () => {
    renderWithChakra(<App />);
    const input = screen.getByPlaceholderText(/Search by title or keyword/i);

    fireEvent.change(input, { target: { value: "mental health" } });

    expect(
      screen.getByText(/Taking stock of mental health/i)
    ).toBeInTheDocument();

    // Should not find others
    expect(
      screen.queryByText(/The ultimate guide to Workplace Chat/i)
    ).not.toBeInTheDocument();
  });

  it("renders resource cards", () => {
    renderWithChakra(<App />);
    const cards = screen.getAllByText(/Workplace Chat/i);
    expect(cards.length).toBeGreaterThan(1);
  });
});
