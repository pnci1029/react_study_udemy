import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    let editableName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editableName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value);
    }

    function handleEditClick(){
        /**
         * 위 코드를 아래 코드 대신 사용하는 이
         * 매우중요
         */
        setIsEditing((editing) => !editing)
        onChangeName(symbol, playerName);
        // setIsEditing((!isEditing));

        // setPlayerName()
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableName}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};