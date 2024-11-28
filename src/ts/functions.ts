import { difficulty } from "../types/types";

const getDifficulty = (difficulty: string): difficulty => {
  switch (difficulty) {
    case "easy":
      return "easy";
    case "medium":
      return "medium";
    case "hard":
      return "hard";
    default:
      return "easy";
  }
};

export const functions = {
  getDifficulty,
};
