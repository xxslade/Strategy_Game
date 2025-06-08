import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartingPage from './assets/StartingPage'
import Menu from './assets/Menu'
import UserPlayerTeam from './assets/UserPlayerTeam'
import Toss from './assets/Toss'
import BatBowlSelection from './assets/BatBowlSelection'
import PlayerSelecTime from './assets/PlayerSelecTime'
import TeamList from './assets/GameTime/TeamList'
import PlayGround from './assets/GameTime/PlayGround'
import GameInterface from './assets/GameTime/GameInterface'
import ResultScreen from './assets/GameTime/ResultScreen'

function App() {
  const [cricketers, setCricketers] = useState([
    // { id: 0, name: "Virat Kohli", stat1: 95, stat2: 40, selectStatus: 0, bgColor: "black" },
    // { id: 1, name: "Steve Smith", stat1: 45, stat2: 92, selectStatus: 0, bgColor: "black"  },
    // { id: 2, name: "Kane Williamson", stat1: 87, stat2: 86, selectStatus: 0, bgColor: "black"  },
    // { id: 3, name: "Joe Root", stat1: 86, stat2: 87, selectStatus: 0, bgColor: "black"  },
    // { id: 4, name: "Rohit Sharma", stat1: 75, stat2: 75, selectStatus: 0, bgColor: "black"   },
    // { id: 5, name: "Babar Azam", stat1: 60, stat2: 45, selectStatus: 0, bgColor: "black"   },
    // { id: 6, name: "David Warner", stat1: 77, stat2: 45, selectStatus: 0, bgColor: "black"   },
    // { id: 7, name: "Ben Stokes", stat1: 79, stat2: 84, selectStatus: 0, bgColor: "black"   },
    // { id: 8, name: "Quinton de Kock", stat1: 76, stat2: 82, selectStatus: 0, bgColor: "black"  },
    // { id: 9, name: "Cristiano Ronaldo", stat1: 99, stat2: 99, selectStatus: 0, bgColor: "black"  },


    { id: 0, name: "Virat Kohli", stat1: 94, stat2: 46, selectStatus: 0, bgColor: "#010130", pos: "bat", ballsFaced: 0, oversBalled: 0 },
    { id: 1, name: "Rohit Sharma", stat1: 90, stat2: 45, selectStatus: 0, bgColor: "#010130", pos: "bat", ballsFaced: 0, oversBalled: 0 },
    { id: 2, name: "Joe Root", stat1: 89, stat2: 60, selectStatus: 0, bgColor: "#010130", pos: "bat", ballsFaced: 0, oversBalled: 0 },
    { id: 3, name: "Kane Williamson", stat1: 88, stat2: 41, selectStatus: 0, bgColor: "#010130", pos: "bat", ballsFaced: 0, oversBalled: 0 },
    { id: 4, name: "David Warner", stat1: 85, stat2: 40, selectStatus: 0, bgColor: "#010130" , pos:"bat" , ballsFaced: 0, oversBalled : 0},
    { id: 5, name: "Chris Gayle", stat1: 93, stat2: 52, selectStatus: 0, bgColor: "#010130", pos:"bat" , ballsFaced: 0, oversBalled : 0 },
    { id: 6, name: "KL Rahul", stat1: 85, stat2: 42, selectStatus: 0, bgColor: "#010130", pos:"bat" , ballsFaced: 0, oversBalled : 0},
    { id: 7, name: "Steve Smith", stat1: 90, stat2: 54, selectStatus: 0, bgColor: "#010130", pos:"bat" , ballsFaced: 0, oversBalled : 0 },
    // { id: 8, name: "Faf du Plessis", stat1: 86, stat2: 45, selectStatus: 0, bgColor: "#010130", pos:"bat" , ballsFaced: 0, oversBalled : 0 },
    // // { id: 9, name: "Shubman Gill", stat1: 80, stat2: 60, selectStatus: 0, bgColor: "#010130", pos:"bat" , ballsFaced: "0", oversBalled : "0" },
    // // { id: 10, name: "Marnus Labuschagne", stat1: 83, stat2: 55, selectStatus: 0, bgColor: "#010130", pos:"bat" , ballsFaced: "0", oversBalled : "0" },

    // // All-rounders (Red)
    { id: 8, name: "Ben Stokes", stat1: 82, stat2: 80, selectStatus: 0, bgColor: "#230335", pos:"alr" , ballsFaced: 0, oversBalled : 0 },
    { id: 9, name: "Hardik Pandya", stat1: 80, stat2: 74, selectStatus: 0, bgColor: "#230335" , pos:"alr" , ballsFaced: 0, oversBalled : 0},
    { id: 10, name: "Shakib Al Hasan", stat1: 75, stat2: 77, selectStatus: 0, bgColor: "#230335" , pos:"alr" , ballsFaced: 0, oversBalled : 0},
    { id: 11, name: "Dwayne Bravo", stat1: 65, stat2: 80, selectStatus: 0, bgColor: "#230335", pos:"alr" , ballsFaced: 0, oversBalled : 0 },
    { id: 12, name: "Chris Woakes", stat1: 70, stat2: 79, selectStatus: 0, bgColor: "#230335" , pos:"alr" , ballsFaced: 0, oversBalled : 0},
    { id: 13, name: "Andre Russell", stat1: 79, stat2: 74, selectStatus: 0, bgColor: "#230335" , pos:"alr" , ballsFaced: 0, oversBalled : 0},
    // { id: 17, name: "Mitchell Marsh", stat1: 75, stat2: 70, selectStatus: 0, bgColor: "#230335" , pos:"alr" , ballsFaced: "0", oversBalled : "0"},

    // Bowlers (Black)
    { id: 14, name: "Shaheen Shah Afridi", stat1: 45, stat2: 87, selectStatus: 0, bgColor: "black" , pos:"bow" , ballsFaced: 0, oversBalled : 0},
    { id: 15, name: "Pat Cummins", stat1: 55, stat2: 90, selectStatus: 0, bgColor: "black", pos:"bow" , ballsFaced: 0, oversBalled : 0 },
    { id: 16, name: "Jasprit Bumrah", stat1: 41, stat2: 95, selectStatus: 0, bgColor: "black" , pos:"bow" , ballsFaced: 0, oversBalled : 0},
    { id: 17, name: "Mitchell Starc", stat1: 45, stat2: 94, selectStatus: 0, bgColor: "black" , pos:"bow" , ballsFaced: 0, oversBalled : 0},
    { id: 18, name: "Rashid Khan", stat1: 42, stat2: 90, selectStatus: 0, bgColor: "black", pos:"bow"  , ballsFaced: 0, oversBalled : 0},
    { id: 19, name: "Trent Boult", stat1: 42, stat2: 87, selectStatus: 0, bgColor: "black", pos:"bow" , ballsFaced: 0, oversBalled : 0 },

  ]);

  // { id: 10, name: "Cristiano Ronaldo", stat1: 99, stat2: 99, selectStatus: 0, bgColor: "black"  });
  const [gameTime, setGame] = useState(false)
  const [isBgColor, setBgColor] = useState("black");
  const [isVisible, setIsVisible] = useState("showToss")
  const [selectPlayerTime, setSelectPlayer] = useState(0);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [choseBat, setChoseBat] = useState(1);
  //const [tossWinner, setTossWinner] = useState(false);
  const tossWinner = useRef(1);
  const handleTeam = (ind) => {

    if (cricketers[ind].selectStatus != 1 && isVisible == "showPlayerSelec") {
      setBgColor("grey");
      let lent1 = team1.length;
      let lent2 = team2.length;
      if (!selectPlayerTime) {
        const toBeAdded = cricketers[ind];
        const newTeam = [...team1, toBeAdded];
        setTeam1(newTeam);
        lent1 += 1;
        console.log(newTeam);

      }
      else {
        const toBeAdded = cricketers[ind];
        const newTeam = [...team2, toBeAdded];
        setTeam2(newTeam);
        lent2 += 1;
        //console.log(team1);
      }
      const newState = 1 - selectPlayerTime;
      setSelectPlayer(newState);
      setCricketers(cricketers =>
        cricketers.map(player =>
          player.id === ind
            ? { ...player, selectStatus: 1, bgColor: "#3a3939" }
            : player
        )
      );
      
      if (lent1 + lent2 == cricketers.length) {
        setIsVisible("showStart");
      }
    }
  }

  return (
    <>
      {/* <ResultScreen /> */}
      {gameTime === false && <div className='Finals'>
        <Menu cricketers={cricketers} handleTeam={handleTeam} />
        <div className='userTeamBox'>
          <UserPlayerTeam name={1} team={tossWinner.current == 2 ? team2 : team1} />

          {isVisible === "showToss" && <Toss isVisible={isVisible} setIsVisible={setIsVisible} tossWinner={tossWinner} setSelectPlayer={setSelectPlayer} />}
          {isVisible === "showBatBowl" && <BatBowlSelection isVisible={isVisible} setIsVisible={setIsVisible} tossWinner={tossWinner} setSelectPlayer={setSelectPlayer} setChoseBat={setChoseBat} />}
          {isVisible === "showPlayerSelec" && <PlayerSelecTime namee={tossWinner.current == 1 ? tossWinner.current + selectPlayerTime : tossWinner.current - selectPlayerTime} />}
          {isVisible === "showStart" && <button className="btn" onClick={() => {
            setGame(!gameTime);
          }} >Game Time</button>}
          <UserPlayerTeam name={2} team={tossWinner.current == 2 ? team1 : team2} />
        </div>



      </div>}
      {gameTime === true &&
        <div>
          {/* <TeamList name = {selectPlayerTime+1} team ={selectPlayerTime ? team1 : team2} /> */}
          <GameInterface cricketers={cricketers} name={selectPlayerTime + 1} team1={
            tossWinner.current == 1
              ? (choseBat == true
                ? team2
                : team1)
              : (choseBat == true
                ? team1
                : team2)
          }
            team2={
              tossWinner.current == 1
                ? (choseBat == true
                  ? team1
                  : team2)
                : (choseBat == true
                  ? team2
                  : team1)
            } gameTime={setGame} setGame={setGame} setTeam1={
              tossWinner.current == 1
                ? (choseBat == true
                  ? setTeam2 
                  : setTeam1)
                : (choseBat == true
                  ? setTeam1
                  : setTeam2)
            } setTeam2={
              tossWinner.current == 1
                ? (choseBat == true
                  ? setTeam1
                  : setTeam2)
                : (choseBat == true
                  ? setTeam2
                  : setTeam1)
            } setCricketers={setCricketers} />

        </div>}
    </>
  )





}

export default App
