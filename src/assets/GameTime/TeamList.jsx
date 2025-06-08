import React from 'react';
import "./TeamList.css";

const TeamList = ({ name, team, handleTeam1 }) => {
    return (
        <div className='superOuter'>
            <div>
                Player {name}: Select your batsman:
            </div>
            <div className='outerBox'>
                {team.map((cricketer, index) => (
                    <button style={{backgroundColor: cricketer.bgColor, color: "white"}
                 }
                 onMouseEnter={(e) => {
                    if (cricketer.bgColor === 'black') {
                      e.target.style.backgroundColor = "rgb(56, 48, 48)"; 
                    }
                    else if(cricketer.bgColor === '#010130'){
                        e.target.style.backgroundColor = "rgb(56, 48, 48)";
                    }

                    else if(cricketer.bgColor === '#230335'){
                        e.target.style.backgroundColor = "rgb(56, 48, 48)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (cricketer.bgColor === 'black') {
                      e.target.style.backgroundColor = cricketer.bgColor; 
                    }
                    else if(cricketer.bgColor === '#010130'){
                        e.target.style.backgroundColor = cricketer.bgColor;
                    }
                    
                    else if(cricketer.bgColor === '#230335'){
                        e.target.style.backgroundColor = cricketer.bgColor;
                    }
                    else{
                        e.target.style.backgroundColor = cricketer.bgColor;
                    }
                  }}
                        className='primaryBox'
                        key={index}
                        onClick={() => handleTeam1(index)} // Pass cricketer ID
                    >
                        <div className='playerName'>
                            {cricketer.name}
                        </div>
                        <div className='batbowl'>
                            <div className='fstStat'>
                                {cricketer.stat1}
                            </div>
                            <div className='sndStat'>
                                {cricketer.stat2}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TeamList;
