import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        {/* Routes WITHOUT layout */}
        <Route path="/login" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Routes WITH layout */}
        <Route element={<Layout />}>
          <Route path="/no-videos" element={<div>Home Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
