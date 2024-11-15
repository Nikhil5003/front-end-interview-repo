import React from "react";
import useMultiSearch from "./useMultiSearch";
import { Close } from "@mui/icons-material";

function MultiSearchComponent() {
  const { query, onChange, filteredUsers, onClick, pillsData, onCloseClick } =
    useMultiSearch();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "auto",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          border: "1px solid black",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {!!pillsData.length &&
            pillsData.map((pill) => (
              <span
                style={{
                  background: "green",
                  borderRadius: "8px",
                  minWidth: "60px",
                  padding: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {pill} {<Close onClick={() => onCloseClick(pill)} />}
              </span>
            ))}
        </div>

        <input
          style={{
            outline: "none",
            flex: 1,
            border: "none",
          }}
          value={query}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div>
        {!!query &&
          !!filteredUsers.length &&
          filteredUsers.map((ele) => (
            <div onClick={() => onClick(ele)}>{ele}</div>
          ))}
      </div>
    </div>
  );
}

export default MultiSearchComponent;
