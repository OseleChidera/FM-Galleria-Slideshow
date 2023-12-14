import React, {useContext} from 'react'
import Logo from '../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom';
import { DataContext } from '../DataContext';

export default function Nav() {
  const { setStartTimer, startTimer, slideshowText, setSlideshowText } = useContext(DataContext)

function startSlideshow(){  
setStartTimer((prev)=> !startTimer)
setSlideshowText(slideshowText === 'start slideshow' ? 'stop slideshow' :  'start slideshow')
}



  return (
    <nav>
      <NavLink to="/">
        <div className="logo" >
            <img 
            src={Logo}
            alt='logo'
            className="logo"/>
        </div>
        </NavLink> 
        <NavLink to="/0"><div className='slideshow-starter'
        onClick={()=> startSlideshow()}
        >{slideshowText}</div></NavLink>
    </nav>
  )
}
