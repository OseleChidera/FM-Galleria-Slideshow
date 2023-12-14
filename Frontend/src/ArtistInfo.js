import React from 'react'
import {motion} from 'framer-motion'

export default function ArtistInfo({item}) {
  return (
    <div className='piece-artist-info'>
             <div className="text" >
                <span className='piece-name'>{item.name}</span>
                <span className='artist'>{item.artist.name}</span>
              </div>
              <div className="thumbnail">
                <motion.img
                initial={{opacity: 0.1}}
                animate={{opacity:1}}
                transition={{duration: 1}}
                  alt='thumbnail-artwork'
                  src={require(`${item.artist.image}`)}/>
                </div>
            </div>
  )
}
