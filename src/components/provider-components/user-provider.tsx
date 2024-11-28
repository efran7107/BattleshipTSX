import { ReactNode, useState } from "react";
import { UserProviderContext } from "../../ts/providers-context";
import { difficulty, phase } from "../../types/types";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [phase, setPhase] = useState<phase>("start");
  const [difficulty, setDifficulty] = useState<difficulty>("easy");

  return (
    <UserProviderContext.Provider
      value={{
        name,
        setName,
        phase,
        setPhase,
        difficulty,
        setDifficulty,
      }}
    >
      {children}
    </UserProviderContext.Provider>
  );
};
