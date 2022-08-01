import React from 'react'
import Select from 'react-select'
import {useEffect, useContext, useState} from "react" 
import {CartContext} from './CartContext'

export default function Systemlist() {

    const {systemlist, setsystem} = useContext(CartContext)
    const {device,setdevice} = useContext(CartContext)
    const transformed = systemlist.map(({ id: value, name: label }) => ({ label, value }))
    
    function handleChange(event){
      var lst = []
      {event.map(event =>(lst.push(event['value'])))}
      setdevice(lst.toString())
      console.log(lst)
    }

    useEffect(()=>{
    fetch('https://f3bzwuya7a444klvzuesn2ihje0ipkjr.lambda-url.ap-east-1.on.aws/')
        .then(response => response.json())
        .then(data => setsystem(data))

    },[])

  return (
    <div>
    System name
    <Select options={transformed} isMulti className="basic-multi-select" onChange={handleChange}/>
    </div>
  )
}