import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { cpuList } from "@consts/Cpu";
import React from "react";
import useCpuInput from "@hooks/ServerComposer/useCpuInput";
import { CommonProps } from "defs";

export interface CpuInputProps extends CommonProps {}

const CpuInput = (props: CpuInputProps) => {
  const { sx, testId } = props;
  const { generalLang, cpuLang, cpu, onChange } = useCpuInput();

  return (
    <FormControl
      data-testid={testId ?? "CpuInput-FormControl-0"}
      fullWidth
      sx={sx}
    >
      <InputLabel data-testid={"CpuInput-InputLabel-0"} id="cpu-select-label">
        {generalLang.cpuInputTitle}
      </InputLabel>
      <Select
        data-testid={"CpuInput-Select-0"}
        labelId="cpu-select-label"
        id="cpu-select"
        value={cpu}
        label={generalLang.cpuInputTitle}
        onChange={onChange}
      >
        {cpuList.map((cpu) => (
          <MenuItem key={cpu} value={cpu}>
            {cpuLang[cpu]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CpuInput;
