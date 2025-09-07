import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const [data, setData]= useState(null);
  const getData =async()=>{
    try{
      const response= await axios.get('http://localhost:5000/');
      setData(response.data);
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }


  return (
    <div>

      <button onClick={getData}>
        Click me
      </button>

      {data && Object.keys(data).map((key, i) => (
  <p key={i}>{key}: {data[key]}</p>
))}

    </div>
  )
}

export default App