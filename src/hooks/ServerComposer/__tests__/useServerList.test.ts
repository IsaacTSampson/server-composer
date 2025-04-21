import {
  mockUseServerComposer,
  useServerComposerResultMock,
} from "@test/mocks/hooks/ServerComposer/useServerComposerMock";
import {
  getLangConfigMock,
  langConfigMock,
  mockUseConfigs,
  useConfigsResultMock,
} from "@test/mocks/hooks/useConfigsMock";
import { renderHook } from "@testing-library/react";
import useServerList, {
  UseServerListResult,
} from "@hooks/ServerComposer/useServerList";
import { Server } from "defs";

jest.mock("@providers/ServerComposerProvider", () => ({
  useServerComposerContext: () => mockUseServerComposer(),
}));

jest.mock("@hooks/useConfigs", () => ({
  __esModule: true,
  default: () => mockUseConfigs(),
}));

describe("useServerList", () => {
  beforeEach(() => {
    mockUseServerComposer.mockReturnValue(useServerComposerResultMock);
    getLangConfigMock.mockReturnValue(langConfigMock);
    mockUseConfigs.mockReturnValue(useConfigsResultMock);
  });

  describe("serverFilter", () => {
    it("should return true", () => {
      mockUseServerComposer.mockReturnValueOnce({
        ...useServerComposerResultMock,
        cpuCondition: {
          ...useServerComposerResultMock.cpuCondition,
          towerServer: true,
        },
        gpuCondition: {
          ...useServerComposerResultMock.gpuCondition,
          towerServer: true,
        },
        memoryCondition: {
          ...useServerComposerResultMock.memoryCondition,
          towerServer: true,
        },
      });

      const { result } = renderHook<UseServerListResult, void>(useServerList);

      const testResult = result.current.serverFilter("towerServer");
      expect(testResult).toEqual(true);
    });

    it("should return false", () => {
      const { result } = renderHook<UseServerListResult, void>(useServerList);

      const testResult = result.current.serverFilter("towerServer");
      expect(testResult).toEqual(false);
    });
  });

  describe("serverSort", () => {
    it("should sort servers alphabetically based on serverLang", () => {
      const { result } = renderHook<UseServerListResult, void>(useServerList);

      const servers: Server[] = [
        "mainFrame",
        "towerServer",
        "4uRackServer",
        "highDensityServer",
      ];
      const sortedServers = servers.sort(result.current.serverSort);

      expect(sortedServers).toEqual([
        "4uRackServer",
        "highDensityServer",
        "mainFrame",
        "towerServer",
      ]);
    });
  });
});
