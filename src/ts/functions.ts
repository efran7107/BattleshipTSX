import { difficulty, player, ship, tile } from "../types/types";

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

const getGameTile = (tile: string, cord: [number, number]): tile => {
  
  const gameTile: tile = {
    id: tile,
    tile: tile,
    cord: cord,
    isHit: false,
    isMiss: false,
  }
  return gameTile
  
}

const getGrid = (): tile[] => {
  const grid: tile[] = []
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
      grid.push(getGameTile(`${String.fromCharCode(65+i)}${j+1}`, [i, j]))
    }
  }
  return grid
}

const getShips = (owner: string): ship[] => {
  return [
    {
      name: "Carrier",
      spaces: 5,
      hits: 5,
      cords: [],
      owner: owner,
      isSunk: false,
    },
    {
      name: "Battleship",
      spaces: 4,
      hits: 4,
      cords: [],
      owner: owner,
      isSunk: false,
    },
    {
      name: "Destroyer",
      spaces: 3,
      hits: 3,
      cords: [],
      owner: owner,
      isSunk: false,
    },
    {
      name: "Submarine",
      spaces: 3,
      hits: 3,
      cords: [],
      owner: owner,
      isSunk: false,
    },
    {
      name: "Patrol Boat",
      spaces: 2,
      hits: 2,
      cords: [],
      owner: owner,
      isSunk: false,
    },
  ]
}

const getUser = (name: string): player => {
  return {
    name: name,
    tiles: getGrid(),
    ships: getShips(name),
  }
}

export const functions = {
  getDifficulty,
  getUser
};
