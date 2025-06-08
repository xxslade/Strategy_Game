import React from 'react'
import "./BatBowlSelection.css"

const BatBowlSelection = ({isVisible, setIsVisible, tossWinner, setSelectPlayer, setChoseBat}) => {
    function handleClick (){
        console.log("AA");
    }
    return (
        <div className = 'decisionBox'>
            <div className='textBox'>
                Player {tossWinner.current == 1 ? 1:2} has won the Toss.
                Please select one:
            </div>
            <div className='buttonBox'>
                <div className='Bat'>
                <button onClick={()=>{
                        //setSelectPlayer(0);
                        setChoseBat(tossWinner.current);
                        setIsVisible("showPlayerSelec")
                    }}>Bat first</button>
                </div>
                <div className='Bowl'>
                <button onClick={()=>{
                        setChoseBat(3 - tossWinner.current);
                        setIsVisible("showPlayerSelec")
                    }}>Bowl first</button>
                </div>
            </div>
        </div>
    )
}

export default BatBowlSelection
