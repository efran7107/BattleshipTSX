import { useUser } from "../ts/providers-context";
import { Gameboard } from "./gameboard";
import { NameInput } from "./name-input";

export const Battleship = () => {
  const { phase } = useUser();
  return (
    <>
      <h1>Battleship</h1>
      <div className="contianer">
        {phase === "start" && <NameInput />}
        {phase !== "start" && <Gameboard />}
      </div>
    </>
  );
};
