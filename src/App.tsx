import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FlashCardContainer } from './components/flashCardContainer';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { questions } from "./data/dataQuestions";


export const flashcardTypes: string[] = ["Mental card","Input card","Multiple choice card", "Salade"];


function App(): JSX.Element {
  const [gameType, setGameType] = React.useState("Mental card")
  const [questionType, setQuestionType] = React.useState("Mental")


  console.log("test1", gameType)


  function setFlashcard(e: any): void{
    console.log("test2", e)
    const generateRandom: number = Math.round(Math.random()*(questions.length-1));
    setQuestionType(questions[generateRandom].type)
    console.log("test3", questionType)
    return setGameType(e)
  }

  // function loadQuestion (): void {
  //   const generateRandom: number = Math.round(Math.random()*(questions.length-1));
  //   setQuestionType(questions[generateRandom].type)
  // }


  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:3000">Flashcards game</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pick your game" id="basic-nav-dropdown" onSelect={setFlashcard}>
              {flashcardTypes.map((flashcard, index) => {
                  return (
                <NavDropdown.Item  key={index} value={flashcard} eventKey={flashcard}>
                  {flashcard}
                </NavDropdown.Item >
              )})}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="App">
      <header className="App-header">
        <p>
          <FlashCardContainer gameType={gameType} questionType={questionType}/>
        </p>
      </header>
    </div>
  </>
  );
}

export default App;
