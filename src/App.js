import "./App.css";
import React, { useRef } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import ToastComponent from "./ToastComponent";
import MultiSearchComponent from "./MultiSelectSearch";

function App() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="App"
      style={{
        padding: "20px",
        height: "100%",
      }}
    >
      {/* <RouterProvider router={routes} /> */}
      <ToastComponent />
      <MultiSearchComponent />
    </div>
  );
}

export default App;
