import React from 'react'
import "./UserPlayerTeam.css"

const UserPlayerTeam = ({ name, team }) => {
    return (
        <div className='Finale'>
            Player No. {name}

            {team.map((cricketer, index) => (
                <div className='indiPlayers1'
                    key={index}>   
                    <div className='statBox1'>
                        <div className='pName1'>
                            {cricketer.name}
                        </div>
                        <div className='stats123'>
                            <div className='stat11'>
                                {cricketer.stat1}
                            </div>
                            <div className='stat21'>
                                {cricketer.stat2}
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
            
        </div>
    )
}

export default UserPlayerTeam
