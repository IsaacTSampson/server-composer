import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ServerComposerProvider,
  useServerComposerContext,
} from "../ServerComposerProvider";

describe("ServerComposerProvider", () => {
  it("should provide context to children", () => {
    const TestComponent = () => {
      const context = useServerComposerContext();
      return <div data-testid="TestComponent">{JSON.stringify(context)}</div>;
    };

    render(
      <ServerComposerProvider>
        <TestComponent />
      </ServerComposerProvider>,
    );

    const contextElement = screen.getByTestId("TestComponent");
    expect(contextElement).toBeInTheDocument();
    expect(contextElement.textContent).not.toBeUndefined();
  });

  it("should throw an error if useServerComposerContext is used outside of the provider", () => {
    const TestComponent = () => {
      useServerComposerContext();
      return <div />;
    };

    expect(() => render(<TestComponent />)).toThrow(
      "useServerComposerContext must be used within a ServerComposerProvider",
    );
  });
});
