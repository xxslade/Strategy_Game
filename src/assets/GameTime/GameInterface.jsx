import React from 'react'
import TeamList from './TeamList'
import PlayGround from './PlayGround';
import { useState } from 'react';
import ResultScreen from './ResultScreen';
import { useEffect } from 'react';
import { useRef } from 'react';
const GameInterface = ({ cricketers, name, team1, team2, gameTime, setGame, setTeam1, setTeam2, setCricketers }) => {
    const reqRuns = useRef("N/A");
    const [isTrue, setTrue] = useState("t1");
    const arr = ["t1", "t2", "t3"];
    const [isBatsman, setBatsman] = useState(null);
    const [isBowler, setBowler] = useState(null);
    const [count, setCount] = useState(0);
    const [showOver, setShowRes] = useState([]);
    const [ifNotWic, setIfNotWic] = useState("NULL");
    const [showRuns, setShowRuns] = useState(0);
    const [showWickets, setWickets] = useState(0);
    const [showOvrs, setShowOvrs] = useState(0.0);
    const [team1Score, setTeam1Score] = useState(500000);
    const [completeGame, setCompleteGame] = useState(false);
    const [thisOverRuns, setThisOverRuns] = useState(0);

    const handleResult = () => {
        setTrue("showResults");
    }
    const handleNextInnings = () => {
        const newTeam1 = team2.map((player) => ({
            ...player,
            selectStatus: 0,
            oversBalledL: 0,
            bgColor: player.pos === "bat" ? "#010130" : player.pos === "alr" ? "#230335" : "black",
        }));

        const newTeam2 = team1.map((player) => ({
            ...player,
            
            selectStatus: 0,
            oversBalledL: 0,
            bgColor: player.pos === "bat" ? "#010130" : player.pos === "alr" ? "#230335" : "black",
        }));
        setTeam1(newTeam1);
        setTeam2(newTeam2);

        setTrue("t1");

        setCompleteGame(true);
        //setTrue("t1");

        setTeam1Score(showRuns);

        setShowOvrs(0);
        setShowRuns(0);
        setWickets(0);

        setTrue("t1");
    }

    const handleNewOver = () => {
        // 
        // setGame(!gameTime);
        console.log(team1);
        setTrue("t1");

    }


    const decideOver = (batty) => {
        setThisOverRuns(0);
        setIfNotWic("NULL");
        const ovr = [];
        setShowRes(ovr);
        // let runs = showRuns;
        // let wickets = showWickets;
        // let ballNo = 0;
        // // console.log(isBatsman.stat1);
        // let newOver = [];
        // for (let i = 0; i < 6; i++) {
        //     ballNo += 1;
        //     const bowlAttribute = batty.stat2 / 99.0;
        //     const batAttribute = isBatsman.stat1 / 99.0;

        //     const rand1 = Math.random();
        //     const rand2 = Math.random();
        //     const rand3 = Math.random();
        //     const rand4 = Math.random();
        //     const randRun = Math.random();
        //     const randWic = Math.random();

        //     const isWicket = rand1 * bowlAttribute * 99.0 + rand2 * (bowlAttribute - batAttribute) * 99.0 + randWic * rand3 * rand4 * 35;
        //     //console.log(rand1 + " " + " " + rand2 , randWic * rand3 * rand4);
        //     if (isWicket >= 85) {
        //         newOver = [...newOver, " W"];
        //         //setShowRes(newOver);
        //         wickets += 1;
        //         break;
        //         //setTrue("t1");

        //         //setShowRes(newOver);
        //     }
        //     else {
        //         const rand5 = Math.random();
        //         const rand6 = Math.random();
        //         const rand7 = Math.random();
        //         const rand8 = Math.random();
        //         const rand9 = Math.random();
        //         const isRun = rand5 * batAttribute + rand6 * (batAttribute - bowlAttribute) + (randRun * rand7 * rand1 - rand8 * rand9 * rand4) * 0.75;

        //         // if (isRun >= 60) {
        //         //     newOver = [...newOver, "  6"];
        //         //     //setShowRes(newOver);
        //         // }
        //         // else if (isRun < 60 && isRun >= 50) {
        //         //     newOver = [...newOver, "  4"];
        //         //     //setShowRes(newOver);
        //         // }
        //         // else if (isRun > 45) {
        //         //     newOver = [...newOver, "  3"];
        //         //     //setShowRes(newOver);
        //         // }
        //         // else if (isRun > 25) {
        //         //      newOver = [...newOver, "  2"];
        //         //    // setShowRes(newOver);
        //         // }
        //         // else if (isRun > 5) {
        //         //      newOver = [...newOver, "  1"];
        //         //     //setShowRes(newOver);
        //         // }
        //         // else {
        //         //     newOver = [...newOver, "  dot"];
        //         //     //setShowRes(newOver);
        //         // }
        //         if (isRun >= 0.8) {
        //             newOver = [...newOver, "     6"];
        //             runs += 6;
        //             //setShowRes(newOver);
        //         }
        //         else if (isRun >= 0.6) {
        //             runs += 4;
        //             newOver = [...newOver, "  4"];
        //             // setTimeout(() => {
        //             //     setShowRes(newOver);
        //             // }, 1000);
        //             //
        //         }
        //         else if (isRun > 0.5) {
        //             runs += 3;
        //             newOver = [...newOver, "  3"];
        //             //setShowRes(newOver);
        //         }
        //         else if (isRun > 0.35) {
        //             runs += 2;
        //             newOver = [...newOver, "  2"];
        //             // setShowRes(newOver);
        //         }
        //         else if (isRun > 0.2) {
        //             runs += 1;
        //             newOver = [...newOver, " 1"];
        //             //setShowRes(newOver);
        //         }
        //         else {
        //             newOver = [...newOver, " dot"];
        //             //setShowRes(newOver);
        //         }
        //     }
        // }
        // if(runs>team1Score){
        //     setIfNotWic("gameDone");
        // }
        // else if(showOvrs+1 == team1.length){
        //     if(!completeGame){
        //         setIfNotWic("nextInnings");
        //     }
        //     else{
        //         setIfNotWic("gameDone");
        //     }
        // }
        // else if (newOver.length == 6) {
        //     setIfNotWic("newovr");

        // }
        // else {
        //     console.log(ifNotWic);
        //     setIfNotWic("out");
        // }

        // if (ballNo == 6) {
        //     setShowOvrs(showOvrs + 1);
        // }
        // else {
        //     setShowOvrs(showOvrs + 1);
        // }
        // setShowRuns(runs);
        // setWickets(wickets);


        // setShowRes(newOver);


        const delayedUpdate = async (updateFunction, value, delay) => {
            await new Promise((resolve) => setTimeout(resolve, delay));
            updateFunction(value);
        };

        const simulateOver = async (runs, wickets, ballNo, newOver) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let inititalRuns = runs[0];
            for (let i = 0; i < 6; i++) {
                ballNo += 1;
                let runScored = 0;
                const bowlAttributeUnsc = batty.stat2;
                const batAttributeUnsc = isBatsman.stat1;
                const bowlAttribute = batty.stat2 / 99.0;
                const batAttribute = isBatsman.stat1 / 99.0;

                const rand1 = Math.random();
                const rand2 = Math.random();
                const rand3 = Math.random();
                const rand4 = Math.random();
                const randRun = Math.random();
                const randWic = Math.random();
                const multiplierbwl2 = Math.random()

                const randbowlatr = Math.min(bowlAttribute * 1.25, 1) + multiplierbwl2 * (1 - Math.min(bowlAttribute * 1.25, 1));
                const isWicket = rand1 * bowlAttributeUnsc / 99.0 + rand2 * (bowlAttributeUnsc - batAttributeUnsc) / 60.0 + randWic * rand3 * rand4 * 35 / 99.0 + randRun * 1.25 * (Math.pow(2.72, -bowlAttribute) - 0.4);

                if (isWicket >= (0.85 * randbowlatr)) {
                    newOver.push(" W");

                    await delayedUpdate(setShowRes, [...newOver], 500); // Delayed update for the UI
                    setWickets(wickets + 1); // Update wickets immediately
                    break;
                } else {
                    let multiplier = 1
                    if (Math.abs(batAttributeUnsc - bowlAttributeUnsc) <= 5) {
                        if (batAttributeUnsc >= 80 && batAttributeUnsc < 90) {
                            multiplier = 1.0;
                        }
                        else if (batAttributeUnsc >= 70 && batAttributeUnsc < 80) {
                            multiplier = 1.0;
                        }
                        else if (batAttributeUnsc > 60 && batAttributeUnsc < 70) {
                            multiplier = 1.0;
                        }
                    }


                    const rand5 = Math.random();
                    const rand6 = Math.random();
                    const rand7 = Math.random();
                    const rand8 = Math.random();
                    const rand9 = Math.random();
                    const rand10 = Math.random();
                    const rand11 = Math.random();
                    const rand12 = Math.random();
                    const rand13 = Math.random();
                    const rand14 = Math.random();
                    let runs1 = 0;
                    if (batAttributeUnsc >= 85) {
                        runs1 = (1.05 + rand8 / 4) * rand5 * batAttribute + rand6 * (batAttribute - bowlAttribute) + (rand9 * rand7 * rand10 - rand11*rand12*rand13) * 0.75 * multiplier;
                    }
                    else if (batAttributeUnsc <= 60) {
                        runs1 = rand5 * batAttribute + rand6 * (batAttribute - bowlAttribute) + (rand9 * rand7 - rand11*rand12*rand13 )* 0.75 * multiplier;
                    }
                    else {
                        runs1 = rand5 * batAttribute + rand6 * (batAttribute - bowlAttribute) + (rand9 * rand7 * rand10 - rand11*rand12*rand13) * 0.75 * multiplier;
                    }



                    if (runs1 >= 0.8) {
                        runScored = 6;
                        newOver.push(" 6");
                    } else if (runs1 >= 0.6) {
                        runScored = 4;
                        newOver.push(" 4");
                    } else if (runs1 > 0.5) {
                        runScored = 3;
                        newOver.push(" 3");
                    } else if (runs1 > 0.35) {
                        runScored = 2;
                        newOver.push(" 2");
                    } else if (runs1 > 0.2) {
                        runScored = 1;
                        newOver.push(" 1");
                    } else {
                        newOver.push(" dot");
                    }



                    await delayedUpdate(setShowRes, [...newOver], 500);

                    runs[0] += runScored;
                    //console.log(runs[0]); 
                    setShowRuns(runs[0]);
                    reqRuns.current = team1Score - runs[0];
                    console.log(reqRuns.current);
                    setThisOverRuns(runs[0] - inititalRuns);
                }
            }
        };
        let runs = [];
        runs.push(showRuns);
        let wickets = showWickets;
        let ballNo = 0;
        let newOver = [];
        const runSimulation = async () => {
            await simulateOver(runs, wickets, ballNo, newOver);
            console.log("runs = " + runs[0]);
            console.log("target = " + team1Score);
            if (runs > team1Score) {
                setIfNotWic("gameDone");
            }
            else if (showOvrs + 1 == team1.length) {
                if (!completeGame) {
                    setIfNotWic("nextInnings");
                }
                else {
                    setIfNotWic("gameDone");
                }
            }
            else if (newOver.length == 6) {
                setIfNotWic("newovr");

            }
            else {
                //console.log(ifNotWic);
                setIfNotWic("out");
            }

            if (newOver.length == 6) {
                setShowOvrs(showOvrs + 1);
            }
            else {
                setShowOvrs(showOvrs + 1);
            }
        };
        runSimulation();

        // if(showRuns>team1Score){
        //     setIfNotWic("gameDone");
        // }
        // else if(showOvrs == team1.length){
        //     if(!completeGame){
        //         setIfNotWic("nextInnings");
        //     }
        //     else{
        //         setIfNotWic("gameDone");
        //     }
        // }
        // else if (showOver.length == 6) {
        //     setIfNotWic("newovr");

        // }
        // else {
        //     console.log(ifNotWic);
        //     setIfNotWic("out");
        // }

        // if (showOver.length == 6) {
        //     setShowOvrs(showOvrs + 1);
        // }
        // else {
        //     setShowOvrs(showOvrs + 1);
        //}
        // setShowRuns(runs);
        // setWickets(wickets);


        // setShowRes(newOver);


    }

    const handleTeam1 = (ind) => {
        let checkCount = count;
        if (count == 2) {
            checkCount = 0;
        }
        //console.log(checkCount);

        if (checkCount == 0) {
            const batty = team2[ind];

            //console.log(batty);
            if (batty.selectStatus == 0) {
                let newCount = checkCount + 1;
                setBatsman(batty);

                setTeam2(prevPlayers =>
                    prevPlayers.map((player, i) =>
                        i === ind ? { ...player, selectStatus: 1, bgColor: "#3a3939" } : player
                    )
                );
                setCount(newCount);
                setTrue(arr[newCount]);
                //   setTeam2(prevPlayers =>
                //     prevPlayers.map((player, i) =>
                //       i === ind ? { ...player, bgColor: "#3a3939"} : player
                //     )
                //   );
            }


        }
        if (checkCount == 1) {

            const bowler = team1[ind];
            const bowlerHasBowled = bowler.oversBalled;
            let total2overs = 0;
            for (let i = 0; i < team1.length; i++) {
                if (team1[i].oversBalled == 2) {
                    total2overs += 1;
                }
            }
            if (bowlerHasBowled == 1 && total2overs == 2) {
                alert("You have already selected 3 bowlers who bowled 2 overs. Please select another one.");
            }
            else {
                if (bowlerHasBowled < 2) {
                    setBowler(bowler);

                    if (bowlerHasBowled == 1) {
                        setTeam1(team1 =>
                            team1.map((player, i) =>
                                i === ind ? { ...player, selectStatus: 1, bgColor: "#3a3939", oversBalled: 2 } : player
                            )
                        );
                    }
                    else {
                        setTeam1(team1 =>
                            team1.map((player, i) =>
                                i === ind ? { ...player, selectStatus: 1, bgColor: "grey", oversBalled: 1 } : player
                            )
                        );
                    }
                    let newCount = checkCount + 1;
                    setCount(newCount);
                    setTrue(arr[newCount]);

                    setTrue("t3");
                    decideOver(bowler);
                }
            }


            // if (batty.selectStatus == 0) {




            // let newCount = checkCount + 1;
            // setBowler(batty);
            // setTeam1(prevPlayers =>
            //     prevPlayers.map((player, i) =>
            //         i === ind ? { ...player, selectStatus: 1, bgColor: "#3a3939" } : player
            //     )
            // );
            // setCount(newCount);
            // setTrue(arr[newCount]);
            // // console.log(isBowler.stat2);
            // //for(let i=0; i<20; i++){
            // decideOver(batty);


            //   setTeam1(prevPlayers =>
            //     prevPlayers.map((player, i) =>
            //       i === ind ? { ...player, bgColor: "#3a3939" } : player
            //     )
            //   );


            //}
            //}

        }




        // if (batty.selectStatus == 1) {
        //     let newCount = count + 1;
        //     if (newCount == 3) {
        //         newCount = 1;
        //     }
        //     setTrue(arr[newCount])
        //     setCount(newCount)
        //     if (newCount == 1) {
        //         setBatsman(batty);

        //     setCricketers(prevPlayers =>
        //         prevPlayers.map((player, i) =>
        //             i === ind ? { ...player, selectStatus: 0, } : player
        //         )
        //     );
        //     setTeam2(prevPlayers =>
        //         prevPlayers.map((player, i) =>
        //             i === ind ? { ...player, bgColor: "#3a3939" } : player
        //         )
        //     );


        // }
        // if (newCount == 2) {
        //     setBowler(batty);
        // console.log(isBowler.stat2);
        //for(let i=0; i<20; i++){
        //     decideOver(batty);
        //     setCricketers(prevPlayers =>
        //         prevPlayers.map((player, i) =>
        //             i === ind ? { ...player, selectStatus: 0, bgColor: "#3a3939" } : player
        //         )
        //     );
        //     setTeam1(prevPlayers =>
        //         prevPlayers.map((player, i) =>
        //             i === ind ? { ...player, bgColor: "#3a3939" } : player
        //         )
        //     );


        //     //}

        // }

        //}


    }
    return (
        <div>
            {isTrue === "t1" && <TeamList name={name} team={team2} handleTeam1={handleTeam1} />}
            {isTrue === "t2" && <TeamList name={3 - name} team={team1} handleTeam1={handleTeam1} />}
            {isTrue === "t3" && <PlayGround isBatsman={isBatsman} isBowler={isBowler} showOver={showOver} ifNotWic={ifNotWic} showOvrs={showOvrs} showWickets={showWickets} showRuns={showRuns} handleNewOver={handleNewOver} handleNextInnings={handleNextInnings} handleResult={handleResult} thisOverRuns={thisOverRuns} reqRuns={reqRuns.current} completeGame={completeGame} />}
            {isTrue === "showResults" && <ResultScreen team1Score={team1Score} showRuns={showRuns} showWickets={team1.length - showWickets} showOvrs={team1.length - showOvrs} />}
        </div>
    )
}

export default GameInterface

