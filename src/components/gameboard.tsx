import { useState } from "react";
import { functions } from "../ts/functions"
import { useUser } from "../ts/providers-context";

export const Gameboard = () => {
    const {name} = useUser();
    const [user, setUser] = useState(functions.getUser(name))
    return <></>
}