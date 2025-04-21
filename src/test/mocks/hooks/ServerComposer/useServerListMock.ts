import { UseServerListResult } from "@hooks/ServerComposer/useServerList";
import { langConfigMock } from "@test/mocks/hooks/useConfigsMock";

export const useServerListResultMock: UseServerListResult = {
  serverFilter: () => true,
  serverSort: () => 0,
  serverLang: langConfigMock.server,
  generalLang: langConfigMock.general,
  renderTrigger: false,
};

export const mockUseServerList = jest.fn();
