import React from "react";
import ServerComposerProvider from "@providers/ServerComposerProvider";

export const severComposerProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <ServerComposerProvider>{children}</ServerComposerProvider>;
