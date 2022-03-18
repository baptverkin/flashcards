import React from "react";
import { InputCard } from "./inputCard";
import { MentalCard } from "./mentalCard";
import { MultipleChoice } from "./multipleChoiceCard";

type Questions = {
  type: string;
  question: string;
  answer: string;
  answer2: string;
  answer3: string;
}

type MyTypedReactComponentProps = {
  questions: Questions[];
  questionType: string;
};

export const Salade: React.FC<MyTypedReactComponentProps> = ({questions, questionType}) => {
  const [questionTypes, setQuestionTypes] = React.useState("")
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [dataQuestion, setDataQuestions] = React.useState(questions)
  const [displayQuestion, setDisplayQuestion] = React.useState(true)

  function loadQuestion (): void {
    const generateRandom: number = Math.round(Math.random()*(questions.length-1));
    setQuestionTypes(questions[generateRandom].type)
  }

    console.log("test===", questionType)

  return (
    <>
    <div onClick={loadQuestion}>
      {questionTypes === "" ?
      (() => {
        if(questionType === "Mental" ){
        return (
        <MentalCard questions={questions}/>
        )
      } else if (questionType === "Input"){
        return (
          <InputCard questions={questions}/>
          )
      }else {
        return (
          <MultipleChoice questions={questions}/>
          )
      }
      })
      :
      (() => {
        if(questionTypes === "Mental" ){
        return (
        <MentalCard questions={questions}/>
        )
      } else if (questionTypes === "Input"){
        return (
          <InputCard questions={questions}/>
          )
      }else {
        return (
          <MultipleChoice questions={questions}/>
          )
      }
      })
       }

    </div>
    </>
  )
}
