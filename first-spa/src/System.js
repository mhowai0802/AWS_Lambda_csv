import React, {useState} from 'react'

export default function System() {

const [device_id,setdevice] = useState()
const [interval,setinternval] = useState()
const [number,setnumber] = useState()

function handleChange(event){
    setdevice(event.target.value)
    console.log(event.target.value)
}
function handleChange_02(event){
    setinternval(event.target.value)
    console.log(event.target.value)
}
function handleChange_03(event){
    setnumber(event.target.value)
    console.log(event.target.value)
}
function handleSubmit(event){
    console.log(device_id)
    console.log(interval)
    console.log(number)
}


  return (
    
    <div>

    Device ID <br/>
    <select name="device_id" id="selectList" value={device_id} onChange={handleChange}>
          <option value="15">15</option>
          <option value="5656">5656</option>
    </select> 
    <br/><br/>
    Time from now <br/>
    <select name="number" id="selectList" value={interval} onChange={handleChange_02}>
          <option value="1">1</option>
          <option value="2">2</option>
    </select>
    <select name="interval" id="selectList" value={number} onChange={handleChange_03}>
          <option value="Minute">Minute</option>
          <option value="Hour">Hour</option>
          <option value="Day">Day</option>
    </select>
    <br/>
    <br/>
    <button onClick={handleSubmit}>Send csv</button>
    </div>
  )

}
