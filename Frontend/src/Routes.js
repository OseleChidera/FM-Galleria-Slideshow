import App from './App'
import { createBrowserRouter , createRoutesFromElements, Route , RouterProvider } from 'react-router-dom';

import Piece from './Piece';
import BaseLayout from './BaseLayout';
import {loaderFunction} from './Api'
import {loaderFunctionPiece} from './Piece'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<BaseLayout/>}>
      <Route 
      index 
      loader={loaderFunction}
      element={<App/>}/>
      
      <Route 
      path='/:id' 
      element={<Piece/>}
      loader={loaderFunctionPiece}
      />

    </Route>
  )
)
function Routes() {
  
return (
      <RouterProvider router={router}/> );
}


export default Routes;
