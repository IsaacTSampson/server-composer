import { Server } from "../defs";

export const serverRecord: Record<Server, Server> = {
  highDensityServer: "highDensityServer",
  mainFrame: "mainFrame",
  towerServer: "towerServer",
  "4uRackServer": "4uRackServer",
};

export const serverList: Server[] = Object.values(serverRecord).sort();
export const serverSet: Set<Server> = new Set(serverList);
