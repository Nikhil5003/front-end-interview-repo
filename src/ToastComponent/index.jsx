import React from "react";
import "./index.css";
import useToastComponent from "./useToastComponent";
import { Close } from "@mui/icons-material";

function ToastComponent() {
  const { onClick, props: notificationProps, onClose } = useToastComponent();
  return (
    <>
      <div className="toast-container">
        <div
          className="item"
          onClick={() =>
            onClick({
              type: "info",
              color: "purple",
              icon: null,
              message: "Info toast",
            })
          }
        >
          Show Info
        </div>
        <div
          className="item"
          onClick={() =>
            onClick({
              type: "success",
              color: "green",
              icon: null,
              message: "Success toast",
            })
          }
        >
          Show Success
        </div>
        <div
          className="item"
          onClick={() =>
            onClick({
              type: "error",
              color: "red",
              icon: null,
              message: "Error toast",
            })
          }
        >
          Show Error
        </div>
      </div>
      {Boolean(notificationProps) ? (
        <div
          className="toast"
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            color: "white",
            width: "200px",
            background: notificationProps.color,
            padding: "20px",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <div> {notificationProps.message}</div>
          <span onClick={onClose} style={{ marginLeft: "20px" }}>
            <Close />
          </span>
        </div>
      ) : null}
    </>
  );
}

export default ToastComponent;
