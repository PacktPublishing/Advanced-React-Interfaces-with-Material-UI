import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const CustomButton = (props) => {
    return (
      <Button
        sx={{
          '&:hover': {
            backgroundColor: green[500],
          },
        }}
        {...props}
      >
        {props.children}
      </Button>
    );
  };

export default CustomButton;