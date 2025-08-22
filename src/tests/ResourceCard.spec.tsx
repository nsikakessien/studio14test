import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "@testing-library/jest-dom";
import ResourceCard from "../components/ResourceCard";
import RedCurveSvg from "../assets/red-curve.svg";
import LinkSvg from "../assets/link-icon.svg";
import type { Resource } from "../utils/constants";

const mockResource = {
  id: 1,
  title: "The ultimate guide to Workplace Chat",
  topic: "Sample Topic",
  tag: "Secure Base",
  type: "Link",
  image: RedCurveSvg,
  icon: LinkSvg,
  styles: {
    position: "absolute",
    right: "0",
  },
};

function renderWithChakra(ui: React.ReactNode) {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
}

describe("ResourceCard", () => {
  it("renders resource details", () => {
    renderWithChakra(<ResourceCard res={mockResource as Resource} />);
    expect(
      screen.getByText(/The ultimate guide to Workplace Chat/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Sample Topic/i)).toBeInTheDocument();
    expect(screen.getByText(/Secure Base/i)).toBeInTheDocument();
  });
});
