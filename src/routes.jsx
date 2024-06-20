import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Countdown from "./components/Countdown";
import StopWatch from "./components/StopWatch";
import StarRating from "./components/StarRating";
import PaginationComponent from "./components/PaginationComponent";
import InfiniteScroll from "./components/InfiniteScroll";
import TicTacToe from "./components/TicTacToe";
import TabComponent from "./TabComponent";

const routes = createBrowserRouter([
  {
    path: "/tabComponent",
    element: <TabComponent />,
    children: [
      {
        path: "/tabComponent/countdown",
        element: <Countdown />,
      },
      { path: "/tabComponent/stopWatch", element: <StopWatch /> },
      {
        path: "/tabComponent/starRating",
        element: <StarRating />,
      },
      {
        path: "/tabComponent/paginationComponent",
        element: <PaginationComponent />,
      },
      {
        path: "/tabComponent/infiniteScroll",
        element: <InfiniteScroll />,
      },
      {
        path: "/tabComponent/tictactoe",
        element: <TicTacToe />,
      },
    ],
  },
]);
export default routes;
