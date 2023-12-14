import React, {  useState  } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom';
import {DataContext} from './DataContext'
import {loaderFunction} from './Api'


export default function BaseLayout() {
const [popupToggle, setPopupToggle] =useState(false)
  let [indexVal , setIndexVal] = useState(1);
  const [startTimer , setStartTimer] = useState(false)
  const [slideshowText, setSlideshowText] = useState('start slideshow');


  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <DataContext.Provider value={{ indexVal, setIndexVal, popupToggle, setPopupToggle, scrollToTop, loaderFunction, setStartTimer, startTimer, slideshowText, setSlideshowText }}>
      
    <div className='dimensions'>
    <Nav/>
    <main id='main'>
    <Outlet/>
    </main>
    </div>

    </DataContext.Provider>
   )
}
