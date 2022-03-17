import React from "react"

type Questions = {
  question: string;
  answer: string;
  answer2: string;
  answer3: string;

}

const mentalQuestions: Questions[] = [
  {
    question: "My first question",
    answer: "Answer to my first question",
    answer2: "Answer to my second question",
    answer3: "Answer to my third question"
  },
  {
    question: "My second question",
    answer2: "Answer to my second question",
    answer: "Answer to my second question",
    answer3: "Answer to my third question"
  },
  {
    question: "My third question",
    answer2: "Answer to my third question",
    answer3: "Answer to my second question",
    answer: "Answer to my third question"
  },
]

export const MultipleChoice = (): JSX.Element => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("")
  const [flag, setFlag] = React.useState(true)

  function loadQuestion (): void {
    const generateRandom: number = Math.round(Math.random()*(mentalQuestions.length-1));
    setQuestion(mentalQuestions[generateRandom].question)
    setAnswer(mentalQuestions[generateRandom].answer)
    setFlag(!flag)
  }

  return (
    <>
    <div onClick={loadQuestion}>{flag ? question : answer}</div>
    </>
  )
}
