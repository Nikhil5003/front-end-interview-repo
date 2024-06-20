import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div
      className="App"
      style={{
        padding: "20px",
        height: "100%",
      }}
    >
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
