export const tabData = [
  {
    id: "countdown",
    label: "CountDown",
  },
  {
    id: "infiniteScroll",
    label: "Infinite Scroll",
  },
  {
    id: "paginationComponent",
    label: "Pagination Component",
  },
  {
    id: "starRating",
    label: "StarRating",
  },
  {
    id: "stopwatch",
    label: "Stopwatch",
  },
  {
    id: "tictactoe",
    label: "TicTacToe",
  },
  {
    id: "accordion",
    label: "Accordion",
  },
  {
    id: "comments",
    label: "Comment System",
  },
  {
    id: "checkBox",
    label: "CheckBox System",
  },
  {
    id: "carousel",
    label: "Carousel",
  },
];

export const questionAnswers = [
  {
    q: "What is your name ?",
    a: "My name is nikhil Attri",
  },
  {
    q: "What is your occupation",
    a: "I am a software development engineer at vegapay",
  },
  {
    q: "Where have you graduated from?",
    a: "I have graduated from IIT INDORE",
  },
  {
    q: "which company you have previously worked with?",
    a: "Previously, i have worked with housing.com as a frontent developer",
  },
];

export const initialCommentsData = [
  {
    id: 0,
    comment: "Lorem Ipsum 1",
    subComments: [
      {
        id: 1,
        comment: "Lorem Ipsum 2",
        subComments: [],
      },
      {
        id: 2,
        comment: "Lorem Ipsum 3",
        subComments: [],
      },
      {
        id: 3,
        comment: "Lorem Ipsum 4",
        subComments: [
          {
            id: 4,
            comment: "Lorem Ipsum 5",
            subComments: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    comment: "Lorem ipsum 6",
    subComments: [],
  },
];

export const checkBoxData = [
  {
    id: 0,
    label: "A",
    checked: false,
    children: [
      {
        id: 1,
        label: "B",
        checked: false,
        children: [],
      },
      {
        id: 2,
        label: "C",
        checked: false,
        children: [
          { id: 3, label: "D", checked: false, children: [] },
          {
            id: 4,
            label: "E",
            checked: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "F",
    children: [],
    checked: false,
  },
];
