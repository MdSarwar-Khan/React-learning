import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) 
{
    const [playerName , setPlayerName] = useState(initialName)
    const [IsEditing , setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing); //fn cuz if we simply do !IsEditing it will work fine but behind the scene react schedule the update and no matter how many time u write the line setISEditing it will always gets intial value (false)
                                             //and this fn call method is also considered best practice
        if (IsEditing) {
        onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);  //handleChange fn call automatically indicate the target - using onchange event on every key stroke and value- the char entered
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(IsEditing)
    {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={ handleEditClick }>{IsEditing? 'Save' : 'Edit'}</button>
          </li>
    );
}