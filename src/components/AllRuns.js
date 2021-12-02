import React, {useContext} from "react";
import { UserContext } from "../UserContext";

export default function AllRuns(props) {
    const {user, setUser} = useContext(UserContext);
    
    return (
        <div>
            <h1>My runs</h1>
            <h2>{user}</h2>
        </div>
    );
}