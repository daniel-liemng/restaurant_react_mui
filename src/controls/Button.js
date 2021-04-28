import React from "react";

import { makeStyles, Button as MuiButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    "& .MuiButton-label": {
      textTransform: "none",
    },
  },
}));

const Button = (props) => {
  const classes = useStyles();

  const { children, color, variant, onClick, className, ...other } = props;

  return (
    <MuiButton
      className={`${classes.root} (${className || ""})`}
      variant={variant || "contained"}
      color={color || "default"}
      onClick={onClick}
      {...other}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
