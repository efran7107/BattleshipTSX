export type phase = "start" | "set-up" | "in-game" | "game-over";

export type shipName = "Carrier" | "Battleship" | "Destroyer" | "Submarine" | "Patrol Boat";

export type difficulty = "easy" | "medium" | "hard";

export type tile = {
    id: string;
    tile: string;
    cord: [number, number];
    isHit: boolean;
    isMiss: boolean;
}

export type ship = {
    id: string;
    name: shipName;
    spaces: 5 | 4 | 3 | 2 | 1;
    hits: 5 | 4 | 3 | 2 | 1;
    cords: [number, number][];
    owner: string;
    isSunk: boolean;
}

export type player = {
    name: string;
    tiles: tile[];
    ships: ship[];
}
