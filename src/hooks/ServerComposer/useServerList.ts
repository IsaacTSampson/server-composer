import { useServerComposerContext } from "@providers/ServerComposerProvider";
import { Server } from "defs";
import useConfigs from "@hooks/useConfigs";

export type UseServerListResult = ReturnType<typeof useServerList>;

const useServerList = () => {
  const { cpuCondition, gpuCondition, memoryCondition, renderTrigger } =
    useServerComposerContext();

  const { getLangConfig } = useConfigs();
  const { server: serverLang, general: generalLang } = getLangConfig();

  const serverFilter = (server: Server) =>
    cpuCondition[server] && gpuCondition[server] && memoryCondition[server];

  const serverSort = (a: Server, b: Server) =>
    serverLang[a].localeCompare(serverLang[b]);

  return {
    serverFilter,
    serverSort,
    serverLang,
    generalLang,
    renderTrigger,
  };
};

export default useServerList;
