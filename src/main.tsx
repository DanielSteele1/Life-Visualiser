import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { StrictMode } from "react"
import { system } from "@chakra-ui/react/preset";


ReactDOM.createRoot(document.getElementById("root")!).render(

  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);