import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import useGpuInput from "@hooks/ServerComposer/useGpuInput";
import { CommonProps } from "defs";

export interface GpuInputProps extends CommonProps {}

const GpuInput = (props: GpuInputProps) => {
  const { sx, testId } = props;
  const { gpu, onChange, generalLang } = useGpuInput();

  return (
    <FormControlLabel
      data-testid={testId ?? "GpuInput-FormControlLabel-0"}
      sx={sx}
      control={
        <Checkbox
          data-testid="GpuInput-Checkbox-0"
          value={gpu}
          onChange={onChange}
          size={"large"}
        />
      }
      label={generalLang.gpuCheckboxTitle}
    />
  );
};

export default GpuInput;
