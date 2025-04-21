import { serverRecord, serverList, serverSet } from "../Server";
import { Server } from "defs";

describe("Server", () => {
  it("should have correct serverRecord mapping", () => {
    const expectedRecord: Record<Server, Server> = {
      highDensityServer: "highDensityServer",
      mainFrame: "mainFrame",
      towerServer: "towerServer",
      ["4uRackServer"]: "4uRackServer",
    };
    expect(serverRecord).toEqual(expectedRecord);
  });

  it("should generate a sorted serverList from serverRecord", () => {
    const expectedList: Server[] = [
      "4uRackServer",
      "highDensityServer",
      "mainFrame",
      "towerServer",
    ];
    expect(serverList).toEqual(expectedList);
  });

  it("should create a Set from serverList", () => {
    const expectedSet = new Set([
      "4uRackServer",
      "highDensityServer",
      "mainFrame",
      "towerServer",
    ]);
    expect(serverSet).toEqual(expectedSet);
  });
});
