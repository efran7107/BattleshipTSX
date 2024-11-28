import { functions } from "../ts/functions";
import { useUser } from "../ts/providers-context";

export const NameInput = () => {
  const { name, setName, phase, setPhase, difficulty, setDifficulty } =
    useUser();
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
      <input type="submit" value="Start" onClick={() => setPhase("in-game")} />
    </div>
  );
};
