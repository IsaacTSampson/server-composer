import { Cpu } from "defs";

export const cpuRecord: Record<Cpu, Cpu> = {
  x86: "x86",
  power: "power",
  arm: "arm",
};

export const cpuList: Cpu[] = Object.values(cpuRecord).sort();
export const cpuSet: Set<Cpu> = new Set(cpuList);
