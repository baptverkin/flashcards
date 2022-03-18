import React from "react";
import { InputCard } from "./inputCard";
import { MentalCard } from "./mentalCard";
import { MultipleChoice } from "./multipleChoiceCard";
import { questions } from "../data/dataQuestions";
import { Salade } from "./Salade";
import { flashcardTypes } from "../App";


type MyTypedReactComponentProps = {
  gameType: string;
  questionType: string;
};

export const FlashCardContainer: React.FC<MyTypedReactComponentProps> = ({gameType, questionType}) => {

  return (
    <>
    {/* <select onChange={setFlashcard}>
          {flashcardTypes.map((flashcard, index) => {
              return (
            <option key={index} value={flashcard}>
              {flashcard}
            </option>
          )})}
    </select> */}
    <div>
      {(() => {
        if (gameType === flashcardTypes[0]) {
          return (
            <MentalCard questions={questions}/>
          )
        } else if (gameType === flashcardTypes[1]) {
          return (
            <InputCard questions={questions}/>
          )
        } else if (gameType === flashcardTypes[2]) {
          return (
            <MultipleChoice questions={questions}/>
          )
        } else {
          return (
            <Salade questions={questions} questionType={questionType}/>
          )
        }
      })()}
    </div>
    </>
  )
}
