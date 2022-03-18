import React from "react";
import { InputCard } from "./inputCard";
import { MentalCard } from "./mentalCard";
import { MultipleChoice } from "./multipleChoiceCard";
import { Questions } from "../data/dataQuestions";


const flashcardTypes: string[] = ["Mental card","Input card","Multiple choice card"];

export const FlashCardContainer = (): JSX.Element => {
  const [gameType, setGameType] = React.useState("Mental card")


function setFlashcard(e: any): void{
  console.log(e.target.value)
  return setGameType(e.target.value)
}
console.log(gameType)


  return (
    <>
    <select onChange={setFlashcard}>
          {flashcardTypes.map((flashcard, index) => {
              return (
            <option key={index} value={flashcard}>
              {flashcard}
            </option>
          )})}
    </select>
    <div>
      {(() => {
        if (gameType === flashcardTypes[0]) {
          return (
            <MentalCard questions={Questions}/>
          )
        } else if (gameType === flashcardTypes[1]) {
          return (
            <InputCard />
          )
        } else {
          return (
            <MultipleChoice />
          )
        }
      })()}
    </div>
    </>
  )
}
