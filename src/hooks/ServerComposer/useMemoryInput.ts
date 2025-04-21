import { useServerComposerContext } from "@providers/ServerComposerProvider";
import useConfigs from "@hooks/useConfigs";
import { maxMemorySize } from "consts/MemorySize";
import { ChangeEvent } from "react";

export type UseMemoryInputResult = ReturnType<typeof useMemoryInput>;

const useMemoryInput = () => {
  const { memory, setMemory, errorState } = useServerComposerContext();
  const { getLangConfig } = useConfigs();
  const { general: generalLang, units: unitsLang } = getLangConfig();

  const error = errorState.memory;
  const value = memory !== null ? new Intl.NumberFormat().format(memory) : "";

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const memoryNumber = parseInt(event.target.value.replace(/\D/g, ""));
    const newMemory = isNaN(memoryNumber) ? null : memoryNumber;

    if (!newMemory) {
      setMemory(newMemory);
      return;
    }

    if (newMemory > maxMemorySize) {
      setMemory(maxMemorySize);
      return;
    }

    setMemory(newMemory);
  };

  return {
    error,
    value,
    onChange,
    generalLang,
    unitsLang,
  };
};

export default useMemoryInput;
