import React from "react";
import { render, screen } from "@testing-library/react";
import ServerList from "@components/ServerComposer/ServerList";
import {
  mockUseServerList,
  useServerListResultMock,
} from "@test/mocks/hooks/ServerComposer/useServerListMock";
import { serverList } from "@consts/Server";

jest.mock("@hooks/ServerComposer/useServerList", () => ({
  __esModule: true,
  default: () => mockUseServerList(),
}));

describe("ServerList", () => {
  it("should render the items in the list", () => {
    mockUseServerList.mockReturnValueOnce(useServerListResultMock);

    render(<ServerList />);

    expect(screen.getByTestId("ServerList-Box-0")).toBeDefined();
    expect(screen.getByTestId("ServerList-Box-ul-0")).toBeDefined();

    serverList.forEach((_s, index) => {
      expect(screen.getByTestId(`ServerList-Box-li-${index}`)).toBeDefined();
      expect(
        screen.getByTestId(`ServerList-Typography-${index}`),
      ).toBeDefined();
    });

    expect(
      screen.queryByTestId("ServerList-Typography-noServersMessage"),
    ).toBeNull();
  });

  it("should render the empty list message", () => {
    mockUseServerList.mockReturnValueOnce({
      ...useServerListResultMock,
      serverFilter: () => false,
    });

    render(<ServerList />);

    expect(screen.getByTestId("ServerList-Box-0")).toBeDefined();
    expect(screen.queryByTestId("ServerList-Box-ul-0")).toBeNull();

    serverList.forEach((_s, index) => {
      expect(screen.queryByTestId(`ServerList-Box-li-${index}`)).toBeNull();
      expect(screen.queryByTestId(`ServerList-Typography-${index}`)).toBeNull();
    });

    expect(
      screen.getByTestId("ServerList-Typography-noServersMessage"),
    ).toBeDefined();
  });
});
