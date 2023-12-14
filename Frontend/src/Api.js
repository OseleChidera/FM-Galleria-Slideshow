
export const loaderFunction = async ()=>{
   //using the port from the server
   const fetchUrl = 'http://localhost:4000/data'
   const res = await fetch(fetchUrl ,  {method: "GET", headers: {"Content-type": "application/json;charset=UTF-8"}})
   const data  = await res.json()
   return data;
}


