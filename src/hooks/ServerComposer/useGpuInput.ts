import { useServerComposerContext } from "@providers/ServerComposerProvider";
import { ChangeEvent } from "react";
import useConfigs from "@hooks/useConfigs";

export type UseGpuInputResult = ReturnType<typeof useGpuInput>;

const useGpuInput = () => {
  const { gpu, setGpu } = useServerComposerContext();
  const { getLangConfig } = useConfigs();
  const { general: generalLang } = getLangConfig();

  const onChange = (_event: ChangeEvent<HTMLInputElement>, checked: boolean) =>
    setGpu(checked);

  return {
    gpu,
    onChange,
    generalLang,
  };
};

export default useGpuInput;
