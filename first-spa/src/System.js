import React, {useState} from 'react'
import axios from 'axios'

export default function System() {

const [device_id,setdevice] = useState()
const [interval,setinternval] = useState()
const [number,setnumber] = useState()

function handleChange(event){
    setdevice(event.target.value)
    console.log(event.target.value)
}
function handleChange_02(event){
    setnumber(event.target.value)
    console.log(event.target.value)
}
function handleChange_03(event){
    setinternval(event.target.value)
    console.log(event.target.value)
}
function handleSubmit(event){

    let text = number + " " + interval
    axios({ 
        method: 'get' , 
        url: ' https://coqaxw2nncra5xh6fmxhgsn4la0gnjbu.lambda-url.ap-east-1.on.aws/', 
        responseType: 'json',
        'Content-Type': 'application/json',
        data: {
            "function_name" : "from_now",
            "device_id": "87",
            "date_range": "2 HOUR"
          }
       }) 
    .then((res) => { console.table(res.data) })
    .catch((error) => { console.error(error) })
    .finally(() => { })
}



  return (
    
    <div>

    Device ID <br/>
    <select name="device_id" id="selectList" value={device_id} onChange={handleChange}>
          <option value="15">15</option>
          <option value="16">16</option>
    </select> 
    <br/><br/>
    Time from now <br/>
    <select name="number" id="selectList" value={number} onChange={handleChange_02}>
          <option value="1">1</option>
          <option value="2">2</option>
    </select>
    <select name="interval" id="selectList" value={interval} onChange={handleChange_03}>
          <option value="MINUTE">Minute</option>
          <option value="HOUR">Hour</option>
          <option value="DAY">Day</option>
    </select>
    <br/>
    <br/>
    <button onClick={handleSubmit}>Send csv</button>
    </div>
  )

}
