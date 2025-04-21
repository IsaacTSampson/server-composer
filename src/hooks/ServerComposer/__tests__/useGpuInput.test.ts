import {
  mockUseServerComposer,
  useServerComposerResultMock,
} from "@test/mocks/hooks/ServerComposer/useServerComposerMock";
import { act, renderHook } from "@testing-library/react";
import useGpuInput, {
  UseGpuInputResult,
} from "@hooks/ServerComposer/useGpuInput";
import { ChangeEvent } from "react";

jest.mock("@providers/ServerComposerProvider", () => ({
  useServerComposerContext: () => mockUseServerComposer(),
}));

describe("useGpuInput", () => {
  beforeEach(() =>
    mockUseServerComposer.mockReturnValue(useServerComposerResultMock),
  );

  describe("onChange", () => {
    it("should set the gpu value", () => {
      const { result } = renderHook<UseGpuInputResult, void>(useGpuInput);

      const value: boolean = true;

      act(() =>
        result.current.onChange({} as ChangeEvent<HTMLInputElement>, value),
      );
      expect(useServerComposerResultMock.setGpu).toHaveBeenCalledWith(value);
    });
  });
});
