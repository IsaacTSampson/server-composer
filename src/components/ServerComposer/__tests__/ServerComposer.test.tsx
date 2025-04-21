import { render, screen } from "@testing-library/react";
import ServerComposer from "@components/ServerComposer";
import {
  mockUseServerComposer,
  useServerComposerResultMock,
} from "@test/mocks/hooks/ServerComposer/useServerComposerMock";

jest.mock("@providers/ServerComposerProvider", () => ({
  useServerComposerContext: () => mockUseServerComposer(),
}));

describe("ServerComposer", () => {
  beforeEach(() => {
    mockUseServerComposer.mockReturnValue(useServerComposerResultMock);
  });

  it("should render the main component", () => {
    render(<ServerComposer />);

    expect(screen.getByTestId("ServerComposer-Box-0")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-Typography-0")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-Box-1")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-CpuInput")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-MemoryInput")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-GpuInput")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-SubmitButton")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-Divider-0")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-Typography-1")).toBeDefined();
    expect(screen.getByTestId("ServerComposer-ServerList")).toBeDefined();
  });
});
