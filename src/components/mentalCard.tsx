import React from "react"

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

type MyTypedReactComponentProps = {
  questions: MutipleQuestions | MentalorInput[];
};

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

export const MentalCard = (questions : (MutipleQuestions | MentalorInput)[]): JSX.Element => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [flag, setFlag] = React.useState(true)
  const [dataQuestion, setDataQuestions] = React.useState(questions)

  function organiseData(){
    return setDataQuestions(questions.filter((item: MentalorInput ) => item.type === "mental"))
  }
  console.log(dataQuestion)

  function loadQuestion (): void {
    const generateRandom: number = Math.round(Math.random()*(mentalQuestions.length-1));
    setQuestion(mentalQuestions[generateRandom].question)
    setAnswer(mentalQuestions[generateRandom].answer)
    console.log("test2", flag)
    setFlag(!flag)
  }

  function loadAnswer (): void {
    setFlag(!flag)
  }

  return (
    <>
    <div onClick={organiseData}>{flag ? question : answer}</div>
    {/* <div>
      {(()=>{
        if(flag===true){
          return <div onClick={loadAnswer}>{question}</div>
          }else{
        return <div onClick={loadQuestion}>{answer}</div>
          }
      })}
    </div> */}
    </>
  )
}
