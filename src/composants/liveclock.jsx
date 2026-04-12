import React from 'react'
import {useState,useEffect} from 'react'
import "./styles/liveclock.css"
export default function Liveclock()  {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return(()=>{
      clearInterval(id)
    })
  }, []);


  return (
    <div className='time'>{time}</div>
  );
}

