import React from "react";

import { Container, Typography, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

import Order from "./components/Order";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <Typography variant='h2' align='center' gutterBottom>
          Restaurant App
        </Typography>
        <Order />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
