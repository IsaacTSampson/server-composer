import React, { createContext, useContext, ReactNode } from "react";
import useServerComposer, {
  UseServerComposerResult,
} from "@hooks/ServerComposer/useServerComposer";

const ServerComposerContext = createContext<
  UseServerComposerResult | undefined
>(undefined);

export const ServerComposerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const state = useServerComposer();

  return (
    <ServerComposerContext.Provider value={state}>
      {children}
    </ServerComposerContext.Provider>
  );
};

export const useServerComposerContext = (): UseServerComposerResult => {
  const context = useContext(ServerComposerContext);
  if (!context)
    throw new Error(
      "useServerComposerContext must be used within a ServerComposerProvider",
    );

  return context;
};

export default ServerComposerProvider;
