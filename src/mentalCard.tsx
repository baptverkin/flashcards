import React from "react"

type Questions = {
  question: string;
  answer: string;
}

const mentalQuestions: Questions[] = [
  {
    question: "My first question",
    answer: "Answer to my first question"
  },
  {
    question: "My second question",
    answer: "Answer to my second question"
  },
  {
    question: "My third question",
    answer: "Answer to my third question"
  },
]

export const MentalCard = (): JSX.Element => {
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
