import React from "react";
import { Button } from "@mui/material";
const CustomButton = (props: any) => {
  return (
    <Button className="custom-button" {...props}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
