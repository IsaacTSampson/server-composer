import useConfigs from "@hooks/useConfigs";
import { useServerComposerContext } from "@providers/ServerComposerProvider";
import { SelectChangeEvent } from "@mui/material";
import { Cpu } from "defs";

export type UseCpuInputResult = ReturnType<typeof useCpuInput>;

const useCpuInput = () => {
  const { getLangConfig } = useConfigs();
  const { general: generalLang, cpu: cpuLang } = getLangConfig();
  const { cpu, setCpu } = useServerComposerContext();

  const onChange = (event: SelectChangeEvent<Cpu>) =>
    setCpu(event.target.value as Cpu);

  return {
    generalLang,
    cpuLang,
    cpu,
    onChange,
  };
};

export default useCpuInput;
