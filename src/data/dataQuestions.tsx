type MentalorInput = {
  type: string;
  question: string;
  answer: string;
}

type MutipleQuestions = {
  type: string;
  question: string;
  answer: string;
  answer2: string;
  answer3: string;
}

export const Questions: (MutipleQuestions | MentalorInput) [] = [
  {
    type: "mental",
    question: "My first question",
    answer: "Answer to my first question",
  },
  {
    type: "mental",
    question: "My second question",
    answer: "Answer to my second question",
  },
  {
    type: "mental",
    question: "My third question",
    answer: "Answer to my third question",
  },
  {
    type: "input",
    question: "My first question",
    answer: "Answer to my first question",
  },
  {
    type: "input",
    question: "My second question",
    answer: "Answer to my second question",
  },
  {
    type: "input",
    question: "My third question",
    answer: "Answer to my third question",
  },
  {
    type: "mutliple-choice",
    question: "My first question",
    answer: "Answer to my first question",
    answer2: "Answer to my second question",
    answer3: "Answer to my third question"
  },
  {
    type: "mutliple-choice",
    question: "My second question",
    answer2: "Answer to my first question",
    answer: "Answer to my second question",
    answer3: "Answer to my third question"
  },
  {
    type: "mutliple-choice",
    question: "My third question",
    answer2: "Answer to my first question",
    answer3: "Answer to my second question",
    answer: "Answer to my third question"
  },
]
