import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./Providers";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Global/styles";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Providers>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Providers>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
