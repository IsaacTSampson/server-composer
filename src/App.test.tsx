import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the main component", () => {
    render(<App />);
    expect(screen.getByTestId("App-ServerComposer")).toBeDefined();
  });
});
