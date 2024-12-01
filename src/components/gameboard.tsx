import { useState } from "react";
import { functions } from "../ts/functions"
import { useUser } from "../ts/providers-context";
import { UserGameboaard } from "./gameboard-coponents/user-gameboard";

export const Gameboard = () => {
    const {name} = useUser();
    const [user, setUser] = useState(functions.getUser(name))
    const [cpu, setCpu] = useState(functions.getUser("cpu"))
    return (
        <div className="gameboards">
            <UserGameboaard user={user} setUser={setUser}/>
            <UserGameboaard user={cpu} setUser={setCpu}/>
        </div>
    )
}