import { Button } from "@mui/material";
import React from "react";
import useSubmitButton from "@hooks/ServerComposer/useSubmitButton";
import { CommonProps } from "defs";

export interface SubmitButtonProps extends CommonProps {}

const SubmitButton = (props: SubmitButtonProps) => {
  const { sx, testId } = props;
  const { disabled, onClick, generalLang } = useSubmitButton();

  return (
    <Button
      data-testid={testId ?? "SubmitButton-Button-0"}
      disabled={disabled}
      sx={sx}
      variant={"contained"}
      onClick={onClick}
    >
      {generalLang.submitButtonTitle}
    </Button>
  );
};

export default SubmitButton;
