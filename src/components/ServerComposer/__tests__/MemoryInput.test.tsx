import { render, screen } from "@testing-library/react";
import MemoryInput from "@components/ServerComposer/MemoryInput";
import { severComposerProviderWrapper } from "@test/wrappers";

describe("MemoryInput", () => {
  it("should render the main component", () => {
    render(<MemoryInput />, {
      wrapper: severComposerProviderWrapper,
    });

    expect(screen.getByTestId("MemoryInput-TextField-0")).toBeDefined();
  });
});
