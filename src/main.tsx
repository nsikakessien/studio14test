import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ResourceProvider from "./context/resource/resourceContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </ChakraProvider>
  </StrictMode>
);
