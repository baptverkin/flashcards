import React from "react";
import { InputCard } from "./inputCard";
import { MentalCard } from "./mentalCard";
import { MultipleChoice } from "./multipleChoiceCard";

export const FlashCardContainer = (): JSX.Element => {
  const [question, setQuestion] = React.useState("")
  return (
    <>
    <MentalCard />
    <InputCard />
    <MultipleChoice />
    </>
  )
}
