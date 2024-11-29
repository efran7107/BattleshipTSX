import { useState } from "react";
import { functions } from "../ts/functions";
import { useUser } from "../ts/providers-context";
import "../styles/name-input.css";
export const NameInput = () => {
  const { name, setName, setPhase, difficulty, setDifficulty } = useUser();
  const [isFirstSignUp, setIsFirstSignUp] = useState(true);

  return (
    <div className="name-input">
      <div className="name-container">
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>

      {!isFirstSignUp && <p>Please Enter a Valid Name to begin</p>}
      <div className="difficulty">
        <label htmlFor="difficulty">Difficulty: </label>
        <select
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={(e) =>
            setDifficulty(functions.getDifficulty(e.target.value))
          }
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <input
        id="start"
        type="submit"
        value="Start"
        onClick={() =>
          name.trim().length >= 2 ? setPhase("set-up") : setIsFirstSignUp(false)
        }
      />
    </div>
  );
};
