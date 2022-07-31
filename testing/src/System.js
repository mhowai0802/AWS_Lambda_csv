import React, {useEffect, useState} from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'

export default function System() {


const [device,setdevice] = useState('0')
const [interval,setinternval] = useState('N/A')
const [number,setnumber] = useState('0')
const [systemlist, setsystem] = useState([{}])

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



useEffect ( ()=>{
    axios({ 
        method: 'get' , 
        url: ' https://f3bzwuya7a444klvzuesn2ihje0ipkjr.lambda-url.ap-east-1.on.aws/', 
        headers: {"Content-Type": "application/json"}
        }) 
    .then((res) => {setsystem(res.data)})
    console.log(systemlist)
  },[])

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
        headers: {"Content-Type": "application/json"},
        params: {
            "function_name" : "from_now",
            "device_id": device,
            "date_range": text
          }
       }) 
    .then((res) => {fileDownload(res.data, 'testing.csv')})
    .catch((error) => { console.error(error) })
    .finally(() => { })
}

  return (
    
    <div>
    Device ID <br/>
    <select name="system" id="selectList" value={device} onChange={handleChange}>
    {
    systemlist.map(system =>(
          <option key={system.id} value={system.id}>{system.name}</option>
    ))}
    </select> 
    <br/><br/>
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
    <br/>
    <br/>
    <button onClick={handleSubmit}>Download csv</button> 

    </div>
  )

}