import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./context/sidebar_context";
import { CoursesProvider } from "./context/courses_context";
import { CartProvider } from "./context/cart_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
);
