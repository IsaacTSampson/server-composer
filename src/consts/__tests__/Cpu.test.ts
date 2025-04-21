import { cpuRecord, cpuList, cpuSet } from "../Cpu";
import { Cpu } from "defs";

describe("Cpu", () => {
  it("should have correct cpuRecord mapping", () => {
    const expectedRecord: Record<Cpu, Cpu> = {
      x86: "x86",
      power: "power",
      arm: "arm",
    };
    expect(cpuRecord).toEqual(expectedRecord);
  });

  it("should generate a sorted cpuList from cpuRecord", () => {
    const expectedList: Cpu[] = ["arm", "power", "x86"];
    expect(cpuList).toEqual(expectedList);
  });

  it("should create a Set from cpuList", () => {
    const expectedSet = new Set(["arm", "power", "x86"]);
    expect(cpuSet).toEqual(expectedSet);
  });
});
