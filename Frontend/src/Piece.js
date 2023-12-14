import React, { useEffect, useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import {motion} from 'framer-motion'
import { DataContext } from './DataContext'
import { useNavigate } from "react-router-dom";
//components
import Popup from './Popup'
import Player from './Player'
import Clicktoview from './Clicktoview'
import ArtistInfo from './ArtistInfo'



export const loaderFunctionPiece = async ({params})=>{
  const fetchUrl = `http://localhost:4000/data/${params.id}`
  const res = await fetch(fetchUrl ,  {method: "GET", headers: {"Content-type": "application/json;charset=UTF-8"}})
   const data  = await res.json()
   return data;
}


export default function PieceDetails() {
const navigate = useNavigate();
  const { popupToggle, setPopupToggle, indexVal, setIndexVal, scrollToTop, startTimer, setStartTimer, setSlideshowText } = useContext(DataContext)
const {id} = useParams();
// console.log({id} ,'useParams')
const item = useLoaderData();

 useEffect(()=>{
      
      let intervalID = null;
      if(startTimer){
        intervalID = setInterval(() => {
        setIndexVal((prev) => (prev + 1))
        navigate(`/${indexVal}`)
        console.log(indexVal)
      }, 5000);
      if (indexVal === 15) {
      console.log('slideshow stopped')
      setSlideshowText(slideshowText => 'start slideshow')
      clearInterval(intervalID)
      setStartTimer((prev)=> false)
      }
    }
      else {
        clearInterval(intervalID)
      setStartTimer((prev)=> false)
      }
      return () => clearInterval(intervalID)


      });

  return (
    
    <div className='piece'>
         {popupToggle && (<Popup popupToggle={popupToggle} item={item} close={setPopupToggle}/>) }
       
      <div className="piece-container">
        <motion.div initial={{x:-400}} animate={{x:0}} transition={{duration:0.5 ,type:'ease'}}className='background-image'>
         <Clicktoview setPopupToggle={setPopupToggle}/>
            <img
            alt='artwork'
            src={require(`${item.images.gallery}`)}
            className='main-image'/>
        </motion.div>   
        <ArtistInfo item={item}/>
      </div>
      
        <div className='description-container'>
        <span className='year'>{item.year}</span>
        <div className='top'>
        <p  className='description'>{item.description} </p>
        <span className='go-to-source 'onClick={scrollToTop} ><a href={item.source}>go to source </a></span>
        </div>
        </div>
        <Player 
        item={item} 
        indexVal={Number(id)} 
        />
       
    </div>
    
  )
}
















