import {CartContext} from './CartContext'
import { useState } from "react";
import Systemlist from "./Systemlist";
import Timelist from "./Timelist";
import axios from 'axios'
import fileDownload from 'js-file-download'
import { Button } from '@mui/material';

function App() {

  const [device,setdevice] = useState('15')
  const [interval,setinternval] = useState('MINUTE')
  const [number,setnumber] = useState('1')
  const [systemlist, setsystem] = useState([{}])

  function handleSubmit(event){
    axios({ 
        method: 'get' , 
        url: ' https://coqaxw2nncra5xh6fmxhgsn4la0gnjbu.lambda-url.ap-east-1.on.aws/', 
        headers: {"Content-Type": "application/json"},
        params: {
            "function_name" : "from_now",
            "device_id": device,
            "date_range": number + " " + interval
          }
       }) 
    .then((res) => {fileDownload(res.data, 'testing.csv')})
    .catch((error) => { console.error(error) })
    .finally(() => { })
}

  return (
    <div>
    <CartContext.Provider value={{systemlist,setsystem,device,setdevice,interval,setinternval,number,setnumber}}>
    <br/>
    <Systemlist/>
    <br/>
    <Timelist/>
    <br/>
    <Button onClick={handleSubmit} variant="outlined">Download csv</Button>
    </CartContext.Provider>
    </div>
  );
}

export default App;
