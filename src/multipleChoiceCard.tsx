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
    answer2: "Answer to my first question",
    answer: "Answer to my second question",
    answer3: "Answer to my third question"
  },
  {
    question: "My third question",
    answer2: "Answer to my first question",
    answer3: "Answer to my second question",
    answer: "Answer to my third question"
  },
]

export const MultipleChoice = (): JSX.Element => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [answer2, setAnswer2] = React.useState("Answer to my second question")
  const [answer3, setAnswer3] = React.useState("Answer to my third question")
  const [playerAnswer, setPlayerAnswer] = React.useState("")
  const [answerFlag, setAnswerFlag] = React.useState(false)
  const [displayQuestion, setDisplayQuestion] = React.useState(true)

  const [flag, setFlag] = React.useState(true)

  function loadQuestion (): void {
    setDisplayQuestion(true)
    const generateRandom: number = Math.round(Math.random()*(mentalQuestions.length-1));
    setQuestion(mentalQuestions[generateRandom].question)
    setAnswer(mentalQuestions[generateRandom].answer)
    setAnswer2(mentalQuestions[generateRandom].answer2)
    setAnswer3(mentalQuestions[generateRandom].answer3)
    setFlag(!flag)
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
      <ul>
          <input type="checkbox" onClick={()=>setPlayerAnswer(answer)}/>{answer}<br></br>
          <input type="checkbox" onClick={()=>setPlayerAnswer(answer2)}/>{answer2}<br></br>
          <input type="checkbox" onClick={()=>setPlayerAnswer(answer3)}/>{answer3}<br></br>
      </ul>
      <button type="submit" className="btn btn-primary" onClick={loadResponse}>
        Submit
      </button>
    </form>
    </>
    : <div onClick={loadQuestion}>{answerFlag ? <p>✅ Good answer</p> : <p>❌ Wrong answer</p> }</div>}

    </>

  )
}
