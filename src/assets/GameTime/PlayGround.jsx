import React from 'react'
import "./PlayGround.css"


const PlayGround = ({ isBatsman, isBowler, showOver, ifNotWic, showOvrs, showWickets, showRuns, handleNewOver, handleNextInnings, handleResult, thisOverRuns, reqRuns, completeGame }) => {
    return (
        <>  <div className='toCenter'>
            <div className='outerbox'>
                <div className='statistics'>
                    <div>
                        Total Score: {showRuns}
                    </div>
                    <div>
                        Wickets Fallen: {showWickets}
                    </div>
                    <div>
                        Overs Done: {showOvrs}
                    </div>
                </div>
                <div className='playArea'>
                    <div className='pg-additional'>
                        <div>
                            Runs This Over : {thisOverRuns}
                        </div>
                        <div>
                            Required Runs: {reqRuns > 4000 ? (
                                <span>N/A</span>
                            ) : (
                                reqRuns <= 0 ? (
                                    <span>It's over buddy.</span>
                                ) : reqRuns
                            )}
                        </div>

                    </div>
                    <div className='playerReveal'>
                        <div className="singlePlayer">
                            <div>Batsman: <span className={isBatsman ? "reveal" : ""}>{isBatsman ? isBatsman.name : "Not Selected"}</span></div>
                            <div>Rating = <span className={isBatsman ? "reveal" : ""}>{isBatsman ? isBatsman.stat1 : "N/A"}</span></div>
                        </div>

                        <div className='singlePlayer'>
                        <div>Bowler: <span className={isBowler ? "reveal1" : ""}>{isBowler ? isBowler.name : "Not Selected"}</span></div>
                        <div>Rating = <span className={isBowler ? "reveal1" : ""}>{isBowler ? isBowler.stat2 : "N/A"}</span></div>
                        </div>
                    </div>
                    <div className='pitch'>
                        <div className='simulation'>
                            <div>Runs : {showOver.map((item, index) => (
                                <span key={index}>
                                    {item}
                                </span>
                            ))}</div>
                            <div>Ball no :</div>
                        </div>
                        <div className='overBtn'>
                            {/* <button>Click Me</button> */}
                            {ifNotWic === "newovr" && <button className='nextOver' onClick={handleNewOver}>  Next Over. </button>}
                            {ifNotWic === "out" && <button className='nextOver' onClick={handleNewOver}>You are out! Select next Batsman</button>}
                            {ifNotWic === "nextInnings" && <button className='nextOver' onClick={handleNextInnings}>Start Next Innings</button>}
                            {ifNotWic === "gameDone" && <button className='nextOver' onClick={handleResult}>View Result!!</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlayGround
