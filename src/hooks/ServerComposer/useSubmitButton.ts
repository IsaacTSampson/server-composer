import { useServerComposerContext } from "@providers/ServerComposerProvider";
import useConfigs from "@hooks/useConfigs";

const useSubmitButton = () => {
  const { error, setRenderTrigger } = useServerComposerContext();
  const { getLangConfig } = useConfigs();
  const { general: generalLang } = getLangConfig();

  const onClick = () => setRenderTrigger((renderTrigger) => !renderTrigger);

  return {
    onClick,
    disabled: error,
    generalLang,
  };
};

export default useSubmitButton;
