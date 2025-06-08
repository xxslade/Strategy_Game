import React from 'react'
import "./Toss.css"

const Toss = ({isVisible, setIsVisible, tossWinner}) => {
    return (
        <div className='TossBox'>
            <div >
                Player 1 Choose:
            </div>
            <div className='buttonClass'>
                <div className='Heads'>
                    <button onClick={()=>{
                        let a = Math.random();
                        if(a>=0.5){
                            tossWinner.current = 1;
                        }
                        else{
                            tossWinner.current = 2;
                        }
                        setIsVisible("showBatBowl")
                    }}>HEADS</button>
                </div>
                <div className='Tails'>
                <button onClick={()=>{
                        let a = Math.random();
                        if(a>=0.5){
                            tossWinner.current = 1;
                        }
                        else{
                            tossWinner.current = 2;
                        }
                        setIsVisible("showBatBowl")
                    }}>TAILS</button>
                </div>
            </div>
        </div>
    )
}

export default Toss
