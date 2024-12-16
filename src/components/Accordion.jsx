import React from "react";
import { questionAnswers } from "../constants";
import useAccordion from "../hooks/useAccordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function QuestionAnswerComponent({ question, answer }) {
  const [expand, onToggle] = useAccordion();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "green",
        color: "rgb(255, 255, 255)",
        border: "1px solid gray",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={onToggle}
      >
        <div>{question}</div>
        <ExpandMoreIcon />
      </div>
      {expand && (
        <div tabIndex="0" style={{ fontSize: "20px" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

function Accordion() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      {questionAnswers.map(({ q, a }, index) => (
        <QuestionAnswerComponent key={index} question={q} answer={a} />
      ))}
    </div>
  );
}

export default Accordion;
