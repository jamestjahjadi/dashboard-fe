import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {API} from './../supports'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap'
import axios from 'axios';
const SummaryDashboard = (props) =>{

    const currentTime = new Date().toISOString().slice(0, 10);


    const [count, setcount]=useState()
    const [dateData, setDatadate]=useState()
    const [date, setdate]=useState({})

    useEffect(()=>{
        Axios.get(`${API}/summary/2020-05-28`)
        .then((res)=>{
            setcount(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const dateSelect=(getDate)=>{
        Axios.get(`${API}/summary/${getDate}`)
        .then((res)=>{
            setcount(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
console.log(count)

return(
    <div style={{display:'flex', flexWrap:'wrap',  padding:20, width:'100%', marginTop:'20%px', marginLeft:'10%'}}>
        <div style={{height:'200px', width:'200px', borderRadius:'50%',backgroundColor:'lightblue'}}>
         <div style={{marginLeft:'40%', marginTop:'30%', fontSize:'50px'}}>
            
         </div>
        </div>
        <div style={{marginTop:'5%', marginLeft:'5%'}}>
             <InputGroup>
        <InputGroupAddon placeholder='YYYY-MM-DD'>Put a Date</InputGroupAddon>
        <Input
        onChange={(e)=>{setdate(e.target.value)}} />
      </InputGroup>
      <br></br>
        <ButtonGroup>
            <Button color="primary" onClick={()=>{dateSelect(date)}}>
                Insert Date
            </Button>
        </ButtonGroup>
            </div>
    </div>
)
}
export default SummaryDashboard