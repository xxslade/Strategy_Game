import React from 'react'
import "./ResultsScreen.css"


const ResultScreen = ({ team1Score, showRuns, showWickets, showOvrs }) => {
    let flag = team1Score > showRuns;
    return (
        <>
            <div className='res-outerBox'>
                <div className='res-statistics'>
                    <div>
                        Score of team1 = {showRuns}
                    </div>
                    <div>
                        Score of team2 = {team1Score}
                    </div>
                </div>
                <div className='res-winner'>
                    {!flag ? (
                        <p>Player 1 won by {showOvrs} overs with {showWickets} wickets in hand. Congratss!</p>
                    ) : (
                        <p>Player 2 won by {team1Score - showRuns} runs. Congrats!!</p>
                    )}
                    
                        
                </div>
            </div>
        </>
    )
}

export default ResultScreen
