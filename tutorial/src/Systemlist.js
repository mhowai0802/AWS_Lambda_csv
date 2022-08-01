import React from 'react'
import {useState, useEffect, useContext} from "react" 
import {CartContext} from './CartContext'


export default function Systemlist() {

const {systemlist, setsystem} = useContext(CartContext)
const {device,setdevice} = useContext(CartContext)

useEffect(()=>{
    fetch('https://f3bzwuya7a444klvzuesn2ihje0ipkjr.lambda-url.ap-east-1.on.aws/')
        .then(response => response.json())
        .then(data => setsystem(data))
    },[])

function handleChange(event){
    setdevice(event.target.value)
    console.log(event.target.value)
}

  return (
    <div>
    System <br/>
    <select name="system" id="selectList" value={device} onChange={handleChange}>
    {
    systemlist.map(system =>(
          <option key={system.id} value={system.id}>{system.name}</option>
    ))}
    </select> 
    </div>
  )
}
