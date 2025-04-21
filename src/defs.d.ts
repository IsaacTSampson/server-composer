import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export type Cpu = "x86" | "power" | "arm";
export type Server =
  | "towerServer"
  | "4uRackServer"
  | "mainFrame"
  | "highDensityServer";

export interface Lang {
  general: {
    pageTitle: string;
    cpuInputTitle: string;
    memorySizeInputTitle: string;
    gpuCheckboxTitle: string;
    submitButtonTitle: string;
    noServersMessage: string;
    serverListTitle: string;
  };
  cpu: Record<Cpu, string>;
  server: Record<Server, string>;
  units: {
    mb: string;
  };
}

export interface CommonProps {
  sx?: SxProps<Theme>;
  testId?: string;
}
