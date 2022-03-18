import React from "react"

type Questions = {
  type: string;
  question: string;
  answer: string;
  answer2: string;
  answer3: string;
}

type MyTypedReactComponentProps = {
  questions: Questions [];
};


export const MentalCard: React.FC<MyTypedReactComponentProps> = ({questions}) => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [flag, setFlag] = React.useState(true)
  const [dataQuestion, setDataQuestions] = React.useState(questions)

  function organiseData(){
    return setDataQuestions(questions.filter((item: Questions ) => item.type === "Mental"))
  }
  console.log(dataQuestion)

  function loadQuestion (): void {
    const generateRandom: number = Math.round(Math.random()*(dataQuestion.length-1));
    setQuestion(dataQuestion[generateRandom].question)
    setAnswer(dataQuestion[generateRandom].answer)
    console.log("test2", flag)
    setFlag(!flag)
  }

  function loadAnswer (): void {
    setFlag(!flag)
  }

  return (
    <>
    <div onClick={() => {organiseData(); loadQuestion() }}>{flag ? question : answer}</div>
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
