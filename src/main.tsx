import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.tsx";
import Layout from "./components/Layout.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

import "./index.css";
import ModalProvider from "./providers/ModalProvider.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Layout />} />
      <Route path="/:docName" element={<Layout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("modal-root")!).render(
  <ModalProvider />
);
