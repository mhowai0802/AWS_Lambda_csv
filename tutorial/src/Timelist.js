import React from 'react'
import {useContext} from "react" 
import {CartContext} from './CartContext'
import Select from 'react-select'


export default function Timelist() {

const {interval,setinternval} = useContext(CartContext)
const {number,setnumber} = useContext(CartContext)

const daylist = []
for (let i = 1; i < 30; i++) {
    daylist.push({
        label: i,
        value: i
    });
}
const hourlist = []
for (let i = 1; i < 24; i++) {
    hourlist.push({
        label: i,
        value: i
    });
}
const minutelist = []
for (let i = 1; i < 60; i++) {
    minutelist.push({
        label: i,
        value: i
    });
}
 
function handleChange_02(event){
    setnumber(event['value'])
}  

function handleChange_03(event){
    setinternval(event['value'])
}

const intervallst = [
    {label:"Minute",value:"Minute"},
    {label:"Hour",value:"Hour"},
    {label:"Day",value:"Day"}
]

return (
    <div>
    Time from now <br/>
    {   interval === 'Hour' &&
    <div>
    <Select options={hourlist} className="basic-select" onChange={handleChange_02}/>
    </div>
}
{   interval === 'Minute' &&
    <div>
    <Select options={minutelist} className="basic-select" onChange={handleChange_02}/>
    </div>
}
{   interval === 'Day' &&
    <div>
    <Select options={daylist} className="basic-select" onChange={handleChange_02}/>
    </div>
}
    <Select options={intervallst} className="basic-select" onChange={handleChange_03}/>
    </div>
  )
}

