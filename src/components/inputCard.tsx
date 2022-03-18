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

export const InputCard = (): JSX.Element => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [playerAnswer, setPlayerAnswer] = React.useState("")
  const [answerFlag, setAnswerFlag] = React.useState(false)
  const [displayQuestion, setDisplayQuestion] = React.useState(true)

  function loadQuestion (): void {
    setDisplayQuestion(true)
    const generateRandom: number = Math.round(Math.random()*(mentalQuestions.length-1));
    setQuestion(mentalQuestions[generateRandom].question)
    setAnswer(mentalQuestions[generateRandom].answer)
    setAnswerFlag(false)
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log("test", e);
    console.log("You clicked submit.");
  }

  function loadResponse(){
    setDisplayQuestion(!displayQuestion)
    if(playerAnswer === answer){
      setAnswerFlag(true)
    }
  }


  return (
    <>
    {displayQuestion ?
    <>
      <p> {question} </p>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="questionAnswer">Answer</label>
        <input
          onChange={(e) => setPlayerAnswer(e.target.value)}
          type="text"
          className="form-control"
          id="answer"
          />
      </div>

      <button type="submit" className="btn btn-primary" onClick={loadResponse} >
        Submit
      </button>
    </form>
    </>
      : <div onClick={loadQuestion}>{answerFlag ? <p>✅ Good answer</p> : <p>❌ Wrong answer</p> }</div>}
  </>
  )
}
