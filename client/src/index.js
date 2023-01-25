import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";
import { SocketProvider } from "./context/SocketContext";
import { BrowserRouter } from "react-router-dom";
import { PeerProvider } from "./context/PeerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SocketProvider>
    <PeerProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </PeerProvider>
  </SocketProvider>
);
