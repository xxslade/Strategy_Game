import React from 'react'
import "./Menu.css"
const Menu = ({cricketers, handleTeam}) => {
    
    return (
        <div className='Final'>
            <div className='players'>
                {cricketers.map((cricketer, index) => (
                    <button className='indiPlayers' style={{backgroundColor: cricketer.bgColor}}
                    
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTeam(cricketer.id)}}> 
                         {/* <div className='statBox'> */}
                            <div className='pName'>
                                {cricketer.name}    
                            </div> 
                            <div className='stats'>
                                <div className='stat1'>
                                    {cricketer.stat1}
                                </div>
                                <div className='stat2'>
                                    {cricketer.stat2}
                                </div>
                            </div>
                        {/* // </div> */}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Menu
