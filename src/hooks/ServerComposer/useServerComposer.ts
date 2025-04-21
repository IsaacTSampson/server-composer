import { useEffect, useMemo, useState } from "react";
import { Cpu, Server } from "defs";
import { cpuList, cpuRecord } from "@consts/Cpu";
import { maxMemorySize, smallestMemoryMultiple } from "@consts/MemorySize";
import { isPowerOfTwo } from "@utils/Math";

export type UseServerComposerResult = ReturnType<typeof useServerComposer>;
type InputFields = "cpu" | "memory" | "gpu";

const useServerComposer = () => {
  const [cpu, setCpu] = useState<Cpu>(cpuList[0]);
  const [memory, setMemory] = useState<number | null>(smallestMemoryMultiple);
  const [gpu, setGpu] = useState<boolean>(false);
  const [renderTrigger, setRenderTrigger] = useState<boolean>(false);
  const [hasSubmit, setHasSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (!hasSubmit && renderTrigger) setHasSubmit(true);
  }, [renderTrigger]);

  const memoryNumber = memory ?? 0;

  const errorState: Record<InputFields, boolean> = useMemo(
    () => ({
      cpu: false,
      memory:
        memoryNumber < smallestMemoryMultiple || memoryNumber > maxMemorySize,
      gpu: false,
    }),
    [memoryNumber],
  );

  const error = Object.values(errorState).some((value) => value);

  const cpuCondition: Record<Server, boolean> = useMemo(
    () => ({
      highDensityServer: [cpuRecord.arm].includes(cpu),
      mainFrame: [cpuRecord.power].includes(cpu),
      towerServer: [cpuRecord.power, cpuRecord.x86, cpuRecord.arm].includes(
        cpu,
      ),
      "4uRackServer": [cpuRecord.power, cpuRecord.x86, cpuRecord.arm].includes(
        cpu,
      ),
    }),
    [cpu],
  );

  const gpuCondition: Record<Server, boolean> = useMemo(
    () => ({
      highDensityServer: gpu,
      mainFrame: !gpu,
      towerServer: !gpu,
      "4uRackServer": !gpu,
    }),
    [gpu],
  );

  const commonMemoryCondition = useMemo(
    () =>
      memoryNumber >= 2048 &&
      memoryNumber <= maxMemorySize &&
      memoryNumber % smallestMemoryMultiple === 0 &&
      isPowerOfTwo(memoryNumber),
    [memory],
  );

  const memoryCondition: Record<Server, boolean> = useMemo(
    () => ({
      highDensityServer: memoryNumber >= 524288 && commonMemoryCondition,
      mainFrame: commonMemoryCondition,
      towerServer: commonMemoryCondition,
      "4uRackServer": memoryNumber >= 131072 && commonMemoryCondition,
    }),
    [memory],
  );

  return {
    cpu,
    setCpu,
    memory,
    setMemory,
    gpu,
    setGpu,
    errorState,
    error,
    setRenderTrigger,
    cpuCondition,
    gpuCondition,
    memoryCondition,
    renderTrigger,
    hasSubmit,
  };
};

export default useServerComposer;
