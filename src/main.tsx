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
import Novideos from "./pages/Videos/NoVideos.tsx"
import Home from "./pages/Videos/Home.tsx";
import VideoDetails from "./pages/Videos/VideoDetails.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import ChannelHeader from "./pages/Channels/ChannelHeader.tsx";
import ChannelEditHeader from "./pages/Channels/ChannelEditHeader.tsx";


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
        <Route path="/videos-details" element={<VideoDetails />} />
          <Route
            path="/no-videos"
            element={<Novideos />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
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
          <Route
          path="/channel"
          element={<ChannelHeader/>}
          />
           <Route
          path="/channel-edit"
          element={<ChannelEditHeader/>}
          />

        </Route>
            
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
