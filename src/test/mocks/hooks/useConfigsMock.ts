import { UseConfigsResult } from "@hooks/useConfigs";
import { Lang } from "defs";

export const langConfigMock: Lang = {
  general: {
    pageTitle: "Server Composer",
    cpuInputTitle: "CPU",
    memorySizeInputTitle: "Memory Size",
    gpuCheckboxTitle: "GPU Accelerator Card",
    submitButtonTitle: "Submit",
    noServersMessage: "No Options",
    serverListTitle: "Server Model Options",
  },
  cpu: {
    x86: "X86",
    power: "Power",
    arm: "ARM",
  },
  server: {
    towerServer: "Tower Server",
    "4uRackServer": "4U Rack Server",
    mainFrame: "Main Frame",
    highDensityServer: "High Density Server",
  },
  units: {
    mb: "MB",
  },
};

export const getLangConfigMock = jest.fn();

export const useConfigsResultMock: UseConfigsResult = {
  getLangConfig: getLangConfigMock,
};

export const mockUseConfigs = jest.fn();
