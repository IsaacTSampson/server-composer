import {
  mockUseServerComposer,
  useServerComposerResultMock,
} from "@test/mocks/hooks/ServerComposer/useServerComposerMock";
import { act, renderHook } from "@testing-library/react";
import useMemoryInput, {
  UseMemoryInputResult,
} from "@hooks/ServerComposer/useMemoryInput";
import { ChangeEvent } from "react";
import { maxMemorySize } from "@consts/MemorySize";

jest.mock("@providers/ServerComposerProvider", () => ({
  useServerComposerContext: () => mockUseServerComposer(),
}));

describe("useMemoryInput", () => {
  beforeEach(() =>
    mockUseServerComposer.mockReturnValue(useServerComposerResultMock),
  );

  describe("value", () => {
    it("should be a formatted string", () => {
      const { result } = renderHook<UseMemoryInputResult, void>(useMemoryInput);
      expect(result.current.value).toEqual("2,048");
    });

    it("should be an empty string", () => {
      mockUseServerComposer.mockReturnValue({
        ...useServerComposerResultMock,
        memory: null,
      });

      const { result } = renderHook<UseMemoryInputResult, void>(useMemoryInput);
      expect(result.current.value).toEqual("");
    });
  });

  describe("onChange", () => {
    const testOnChange = (value: string, expected: number | null) => {
      const { result } = renderHook<UseMemoryInputResult, void>(useMemoryInput);

      const event = { target: { value } } as ChangeEvent<HTMLInputElement>;

      act(() => result.current.onChange(event));
      expect(useServerComposerResultMock.setMemory).toHaveBeenCalledWith(
        expected,
      );
    };

    it("should set the memory to null", () => {
      testOnChange("", null);
    });

    it("should set the memory to maxMemorySize", () => {
      testOnChange("8,388,609", maxMemorySize);
    });

    it("should set the memory to the value in the event param", () => {
      testOnChange("1,234", 1234);
    });
  });
});
