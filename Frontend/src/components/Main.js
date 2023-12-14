// import React, { useContext, useState} from 'react'
// import {Link } from 'react-router-dom'
// import {useLoaderData, useParams } from 'react-router'
// import { useQuery } from 'react-query'
// //context
// import { DataContext } from '../DataContext'
// //components
// import GalleryItem from './GalleryItem'


// export default function Main() {
//     // const {data , status} = useQuery('Data' , getDataLoader)
   
//   return (
//     <main style={{padding:'2rem' ,width: '100%', height:'100vh' , border:'1px solid black'}}>
//       <div style={{ height:'100%' , border:'1px solid black'}}>
//           {data.map(artPiece=>
//             (<Link className='link' to={`/${artPiece.name.trim()}`} key={artPiece.name.trim()}>
//             <GalleryItem data={artPiece}/>
//             </Link>))}
//       </div>
//     </main>
    
//   )
// }
