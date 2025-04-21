import { TextField } from "@mui/material";
import React from "react";
import useMemoryInput from "@hooks/ServerComposer/useMemoryInput";
import { CommonProps } from "defs";

export interface MemoryInputProps extends CommonProps {}

const MemoryInput = (props: MemoryInputProps) => {
  const { sx, testId } = props;
  const { error, value, onChange, generalLang, unitsLang } = useMemoryInput();

  return (
    <TextField
      data-testid={testId ?? "MemoryInput-TextField-0"}
      sx={sx}
      error={error}
      value={value}
      onChange={onChange}
      id="outlined-number"
      label={generalLang.memorySizeInputTitle}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
        input: {
          endAdornment: unitsLang.mb,
        },
      }}
    />
  );
};

export default MemoryInput;
