import { difficulty, phase } from "./types";

export type TUserProvider = {
  name: string;
  setName: (name: string) => void;
  phase: phase;
  setPhase: (phase: phase) => void;
  difficulty: difficulty;
  setDifficulty: (difficulty: difficulty) => void;
};
