import React , {useContext}from 'react';
import './App.css';
import { useLoaderData } from 'react-router'
import {Link } from 'react-router-dom'
import Masonry from 'react-masonry-css'
import './masonry.css'
import { DataContext } from './DataContext'
//components

function App() {
const {scrollToTop } = useContext(DataContext)
const dataArray =  useLoaderData()
const breakpoints = {
  default : 3,
  1000: 2 ,
  767 : 1 ,
}
  return (
    <div className='grid' id='grid' data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }' >
              <Masonry
               breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
            
              {dataArray.map((e , index) =>( 
                <div className={`grid-item gridItem${e.id}`} key={`${e.id}`}>
                <Link onClick={scrollToTop} className='link' to={`/${e.id}`} >
                           <img
                          alt='artwork'
                          src={require(`${e.images.gallery}`)}
                          className='gallery-image'/>
                        <div className='artist-info'>
                          <span className='piece-name capB'>{e.name}</span>
                          <span className='artist capB'>{e.artist.name}</span>
                        </div>
                </Link>
                        </div>
                ))}
                </Masonry>
      </div>
  );
}

export default App;


