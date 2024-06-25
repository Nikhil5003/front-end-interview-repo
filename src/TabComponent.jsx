import React, { act, useState } from "react";
import { tabData } from "./constants";
import { useNavigate, Outlet } from "react-router-dom";

function TabComponent() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const navigate = useNavigate();
  const onTabChange = (newValue) => {
    setActiveTab(newValue);
    navigate(`/tabComponent/${newValue}`);
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          textDecoration: "none",
          // alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          marginBottom: "20px",
          whiteSpace: "nowrap",
          overflowX: "scroll",
          gap: "24px",
          position: "sticky",
          top: "0px",
          zIndex: 1,
        }}
      >
        {tabData.map((ele) => (
          <span
            style={{
              color: activeTab === ele.id ? "purple" : "gray",
              textDecorationLine: activeTab === ele.id ? "underline" : "none",
              cursor: "pointer",
            }}
            onClick={() => onTabChange(ele.id)}
          >
            {ele.label}
          </span>
        ))}
      </div>
      <div
        style={{
          maxHeight: "100%",
          display: "flex",
          overflow: "scroll",
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default TabComponent;
