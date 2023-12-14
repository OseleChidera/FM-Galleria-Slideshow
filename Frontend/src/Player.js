import React from 'react'
import '../src/'
import backIMG from "../src/assets/shared/icon-back-button.svg"
import nextIMG from './assets/shared/icon-next-button.svg'
import { useNavigate } from "react-router-dom";

export default function Player({item,indexVal}) {

const navigate = useNavigate();
const itemArray = 15;


  return (
    <div className='bottom-player' >
        <input 
        className="progressBar" 
        type="range" 
        name="range" 
        min={0} 
        max={itemArray}
        style={{ width:`${(100*(indexVal+1))/itemArray}%`}}
        />
    <div className="player" >
        <div className="text" >
                <span className='piece-name' >{item.name}</span>
                <span className='artist' >{item.artist.name}</span>
            </div>
            <div className="playerIcons" >
               <button 
               onClick={()=>navigate(`/${indexVal === 0 ? indexVal : indexVal-1}`)}
               disabled={indexVal === 0 ? true : false}
               >
                <img
                alt='back'
                src={backIMG}
                width={25}
                style={{opacity:`${indexVal === 0 ? '0.4' : '1'}`}}
                />
                </button>
                <button  
                onClick={()=>navigate(`/${indexVal === itemArray ? indexVal : indexVal+1}`)}
                disabled={indexVal === itemArray-1 ? true : false}
                >
                <img
                alt='next'
                src={nextIMG}
                width={25}
                 style={{opacity:`${indexVal   === itemArray-1 ? '0.4' : '1'}`}}
                 />
                </button>

            </div>
    </div>
</div>
  )
}
