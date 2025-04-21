import React, { useMemo } from "react";
import { serverList } from "@consts/Server";
import { Box, Typography } from "@mui/material";
import useServerList from "@hooks/ServerComposer/useServerList";
import { CommonProps } from "defs";

export interface ServerListProps extends CommonProps {}

const ServerList = (props: ServerListProps) => {
  const { sx, testId } = props;
  const { serverFilter, serverSort, serverLang, generalLang, renderTrigger } =
    useServerList();

  const list = useMemo(() => {
    const componentList = serverList
      .filter(serverFilter)
      .sort(serverSort)
      .map((server, index) => (
        <Box
          data-testid={`ServerList-Box-li-${index}`}
          key={server}
          component={"li"}
        >
          <Typography
            data-testid={`ServerList-Typography-${index}`}
            key={server}
          >
            {serverLang[server]}
          </Typography>
        </Box>
      ));

    return !componentList.length ? (
      <Typography data-testid={"ServerList-Typography-noServersMessage"}>
        {generalLang.noServersMessage}
      </Typography>
    ) : (
      <Box data-testid={"ServerList-Box-ul-0"} component={"ul"}>
        {componentList}
      </Box>
    );
  }, [renderTrigger]);

  return (
    <Box sx={sx} data-testid={testId ?? "ServerList-Box-0"}>
      {list}
    </Box>
  );
};

export default ServerList;
