import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();

  const { children, ...other } = props;

  return (
    <form noValidate autoComplete='off' className={classes.root} {...other}>
      {children}
    </form>
  );
};

export default Form;
