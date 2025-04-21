import { act, renderHook } from "@testing-library/react";
import useCpuInput, {
  UseCpuInputResult,
} from "@hooks/ServerComposer/useCpuInput";
import {
  mockUseServerComposer,
  useServerComposerResultMock,
} from "@test/mocks/hooks/ServerComposer/useServerComposerMock";
import { SelectChangeEvent } from "@mui/material";
import { Cpu } from "defs";

jest.mock("@providers/ServerComposerProvider", () => ({
  useServerComposerContext: () => mockUseServerComposer(),
}));

describe("useCpuInput", () => {
  beforeEach(() =>
    mockUseServerComposer.mockReturnValue(useServerComposerResultMock),
  );

  describe("onChange", () => {
    it("should set the cpu value", () => {
      const { result } = renderHook<UseCpuInputResult, void>(useCpuInput);

      const value: Cpu = "power";
      const event = { target: { value } } as SelectChangeEvent<Cpu>;

      act(() => result.current.onChange(event));
      expect(useServerComposerResultMock.setCpu).toHaveBeenCalledWith(value);
    });
  });
});
