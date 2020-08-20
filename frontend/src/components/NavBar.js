import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Typography variant="h6">CRUD Fiscalias</Typography>
      </Toolbar>
    </AppBar>
  );
}
