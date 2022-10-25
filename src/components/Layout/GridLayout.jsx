import React from "react";
import { Grow, Grid } from "@material-ui/core";
import useStyles from "./styles.js";

const GridLayout = (props) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {props.children}
      </Grid>
    </Grow>
  );
};

export default GridLayout;
