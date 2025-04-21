import { render, screen } from "@testing-library/react";
import CpuInput from "@components/ServerComposer/CpuInput";
import { severComposerProviderWrapper } from "@test/wrappers";

describe("CpuInput", () => {
  it("should render the main component", () => {
    render(<CpuInput />, {
      wrapper: severComposerProviderWrapper,
    });

    expect(screen.getByTestId("CpuInput-FormControl-0")).toBeDefined();
    expect(screen.getByTestId("CpuInput-InputLabel-0")).toBeDefined();
    expect(screen.getByTestId("CpuInput-Select-0")).toBeDefined();
  });
});
