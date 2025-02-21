import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SEO from "./components/SEO.tsx";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Analytics />
      <SEO />
      <App />
    </HelmetProvider>
  </StrictMode>
);
