import { UseServerComposerResult } from "@hooks/ServerComposer/useServerComposer";

export const useServerComposerResultMock: UseServerComposerResult = {
  cpu: "x86",
  setCpu: jest.fn(),
  memory: 2048,
  setMemory: jest.fn(),
  gpu: true,
  setGpu: jest.fn(),
  errorState: {
    cpu: false,
    memory: false,
    gpu: false,
  },
  error: false,
  setRenderTrigger: jest.fn(),
  cpuCondition: {
    highDensityServer: false,
    mainFrame: false,
    towerServer: false,
    "4uRackServer": false,
  },
  gpuCondition: {
    highDensityServer: false,
    mainFrame: false,
    towerServer: false,
    "4uRackServer": false,
  },
  memoryCondition: {
    highDensityServer: false,
    mainFrame: false,
    towerServer: false,
    "4uRackServer": false,
  },
  renderTrigger: false,
  hasSubmit: true,
};

export const mockUseServerComposer = jest.fn();
