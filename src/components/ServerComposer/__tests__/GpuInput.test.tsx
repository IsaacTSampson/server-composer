import GpuInput from "@components/ServerComposer/GpuInput";
import { render, screen } from "@testing-library/react";
import { severComposerProviderWrapper } from "@test/wrappers";

describe("GpuInput", () => {
  it("should render the main component", () => {
    render(<GpuInput />, {
      wrapper: severComposerProviderWrapper,
    });

    expect(screen.getByTestId("GpuInput-FormControlLabel-0")).toBeDefined();
    expect(screen.getByTestId("GpuInput-Checkbox-0")).toBeDefined();
  });
});
