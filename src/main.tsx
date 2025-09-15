import "bootstrap/dist/css/bootstrap.min.css"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout.tsx";
import PrivacyPageLayout from "./components/layout/privacyPageLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        {/* Routes WITHOUT layout */}
        <Route path="/login" element={<App />} />
        <Route path="/register" element={<Register />} />

        {/* privacy and T&C routes */}
        <Route element={<PrivacyPageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        {/* Routes WITH layout */}
        <Route element={<Layout />}>
          <Route
            path="/no-videos"
            element={<div className="main-contents">Home Page</div>}
          />
          <Route
            path="/home"
            element={<div className="main-contents">all videos</div>}
          />
          <Route
            path="/liked-videos"
            element={<div className="main-contents">Liked videos</div>}
          />
          <Route
            path="/history"
            element={<div className="main-contents">Liked videos</div>}
          />
          <Route
            path="/my-content"
            element={<div className="main-contents">Liked videos</div>}
          />
          <Route
            path="/collections"
            element={<div className="main-contents">Liked videos</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
