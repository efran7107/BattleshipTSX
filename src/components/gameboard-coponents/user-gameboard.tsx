import { ComponentProps } from "react"
import { player, tile } from "../../types/types"

type tileButtonProps = ComponentProps<"button">

const GameTile = ({gameTile, tileButtonProps}: {gameTile: tile, tileButtonProps: tileButtonProps}) => {
    const {id, tile, isHit, isMiss} = gameTile
    return (
        <button id={id} className={`game-tile ${isHit ? "hit" : ""} ${isMiss ? "miss" : ""}`} {...tileButtonProps}>{tile}</button>
    )
}

export const UserGameboaard = ({user, setUser}: {user: player, setUser: (user: player) => void}) => {
    const {name, tiles, ships} = user
    return (
        <div className="user-board">
            <h4>{name}</h4>
            <div className="ships">
                {ships.map((ship) => 
                <p id={ship.id} key={ship.id}>{ship.name}</p>
                )}
            </div>
            <div className="game-tiles-cont">
                {tiles.map((tile) => <GameTile key={tile.id} gameTile={tile}
                tileButtonProps={{onClick: () => setUser(user)}}/>)}
            </div>
        </div>
    )
}

