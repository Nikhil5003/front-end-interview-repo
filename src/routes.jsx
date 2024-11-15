import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Countdown from "./components/Countdown";
import StopWatch from "./components/StopWatch";
import StarRating from "./components/StarRating";
import PaginationComponent from "./components/PaginationComponent";
import InfiniteScroll from "./components/InfiniteScroll";
import TicTacToe from "./components/TicTacToe";
import TabComponent from "./TabComponent";
import Accordion from "./components/Accordion";
import Comments from "./CommentSystem/Comments";
import CheckBoxSystem from "./CheckboxDesign/CheckBox";
import Carousel from "./components/Carousel";

const imageData = [
  "https://picsum.photos/id/600/600/400",
  "https://picsum.photos/id/100/600/400",
  "https://picsum.photos/id/200/600/400",
  "https://picsum.photos/id/300/600/400",
  "https://picsum.photos/id/400/600/400",
  "https://picsum.photos/id/500/600/400",
];

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
      {
        path: "/tabComponent/accordion",
        element: <Accordion />,
      },
      {
        path: "/tabComponent/comments",
        element: <Comments />,
      },
      {
        path: "/tabComponent/checkBox",
        element: <CheckBoxSystem />,
      },
      {
        path: "/tabComponent/carousel",
        element: <Carousel data={imageData} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/tabComponent/countdown" replace />,
  },
]);
export default routes;
