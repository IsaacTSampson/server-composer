import { render, screen } from "@testing-library/react";
import SubmitButton from "@components/ServerComposer/SubmitButton";
import { severComposerProviderWrapper } from "@test/wrappers";

describe("SubmitButton", () => {
  it("should render the main component", () => {
    render(<SubmitButton />, {
      wrapper: severComposerProviderWrapper,
    });

    expect(screen.getByTestId("SubmitButton-Button-0")).toBeDefined();
  });
});
