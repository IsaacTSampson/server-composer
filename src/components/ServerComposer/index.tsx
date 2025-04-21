import { Box, Divider, Fade, Typography } from "@mui/material";
import React from "react";
import useConfigs from "@hooks/useConfigs";
import CpuInput from "@components/ServerComposer/CpuInput";
import MemoryInput from "@components/ServerComposer/MemoryInput";
import GpuInput from "@components/ServerComposer/GpuInput";
import SubmitButton from "@components/ServerComposer/SubmitButton";
import ServerList from "@components/ServerComposer/ServerList";
import { useServerComposerContext } from "@providers/ServerComposerProvider";
import { CommonProps } from "defs";

const timeout = 400;
const gap = 4;

export interface ServerComposerProps extends CommonProps {}

const ServerComposer = (props: ServerComposerProps) => {
  const { testId, sx } = props;
  const { hasSubmit } = useServerComposerContext();
  const { getLangConfig } = useConfigs();
  const { general: generalLang } = getLangConfig();

  return (
    <Fade timeout={timeout} in>
      <Box
        data-testid={testId ?? "ServerComposer-Box-0"}
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          p: 8,
          gap,
          ...sx,
        }}
      >
        <Typography
          data-testid="ServerComposer-Typography-0"
          sx={{ fontWeight: "bold" }}
          variant={"h5"}
        >
          {generalLang.pageTitle}
        </Typography>
        <Box
          data-testid="ServerComposer-Box-1"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap,
          }}
        >
          <CpuInput
            testId={"ServerComposer-CpuInput"}
            sx={{ width: "30%", minWidth: 200 }}
          />
          <MemoryInput
            testId={"ServerComposer-MemoryInput"}
            sx={{ width: "30%", minWidth: 200 }}
          />
          <GpuInput testId={"ServerComposer-GpuInput"} sx={{ minWidth: 200 }} />
        </Box>
        <SubmitButton
          testId={"ServerComposer-SubmitButton"}
          sx={{ width: "fit-content" }}
        />
        <Divider data-testid={"ServerComposer-Divider-0"} />
        <Fade timeout={timeout} in={hasSubmit}>
          <Box>
            <Typography
              data-testid={"ServerComposer-Typography-1"}
              sx={{ fontWeight: "bold" }}
              variant={"h6"}
            >
              {generalLang.serverListTitle}
            </Typography>
            <ServerList testId={"ServerComposer-ServerList"} />
          </Box>
        </Fade>
      </Box>
    </Fade>
  );
};

export default ServerComposer;
