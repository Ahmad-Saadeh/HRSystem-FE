import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
    // height: "auto",
    marginBlock: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    width: "100vw",
  },
  input: {
    width: "100%",
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
