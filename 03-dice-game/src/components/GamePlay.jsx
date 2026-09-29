import TotalScore from "./TotalScore.jsx";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setscore] = useState();

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const Dice = () => {
    const randomNumber = generateRandomNum(1, 7);
    setcurrentDice((prev) => randomNumber);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Rolldice currentDice={currentDice} Dice={Dice} />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
