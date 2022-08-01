import React from 'react'
import {useState, useEffect, useContext} from "react" 
import {CartContext} from './CartContext'

export default function Timelist() {

const {interval,setinternval} = useContext(CartContext)
const {number,setnumber} = useContext(CartContext)

const daylist = []
for (let i = 1; i < 30; i++) {
    daylist.push({
        id: i,
        day: i
    });
}
const hourlist = []
for (let i = 1; i < 24; i++) {
    hourlist.push({
        id: i,
        hour: i
    });
}
const minutelist = []
for (let i = 1; i < 60; i++) {
    minutelist.push({
        id: i,
        minute: i
    });
}
  
function handleChange_02(event){
    setnumber(event.target.value)
}  

function handleChange_03(event){
    setinternval(event.target.value)
}

return (
    <div>
    Time from now <br/>
    {   interval == 'HOUR' &&
    <div>
    <select name="number" id="selectList" value={number} onChange={handleChange_02}>
    { hourlist.map(time =>(
          <option key={time.id} value={time.hour}>{time.hour}</option>
    ))}
    </select>
    </div>
}
{   interval == 'MINUTE' &&
    <div>
    <select name="number" id="selectList" value={number} onChange={handleChange_02}>
    { minutelist.map(time =>(
          <option key={time.id} value={time.minute}>{time.minute}</option>
    ))}
    </select>
    </div>
}
{   interval == 'DAY' &&
    <div>
    <select name="number" id="selectList" value={number} onChange={handleChange_02}>
    { daylist.map(time =>(
          <option key={time.id} value={time.day}>{time.day}</option>
    ))}
    </select>
    </div>
}
    <select name="interval" id="selectList" value={interval} onChange={handleChange_03}>
    <option value="MINUTE">Minute</option>
    <option value="HOUR">Hour</option>
    <option value="DAY">Day</option>
    </select>
    </div>
  )
}
