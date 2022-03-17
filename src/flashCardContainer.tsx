import React from "react";
import { InputCard } from "./inputCard";
import { MentalCard } from "./mentalCard";
import { MultipleChoice } from "./multipleChoiceCard";

export const FlashCardContainer = (): JSX.Element => {
  const [gameType, setGameType] = React.useState("MentalCard")

function pickGame (){

}

  return (
    <>
    <select>
        <option value="Mental_card" onClick={()=> setGameType("MentalCard")}>
              Mental card
            </option>
            <option value="Input_card">
              Input card
            </option>
            <option value="Multiple_choice_card">
              Multiple choice card
          </option>
    </select>

     <MentalCard />
    <InputCard />
    <MultipleChoice />
    </>
  )
}
