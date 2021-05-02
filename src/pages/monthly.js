import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {API} from './../supports'

const MonthlyDashboard = (props) =>{

    const [count, setcount]=useState() 

    useEffect(()=>{
        Axios.get(`${API}/monthly/5`)
        .then((res)=>{
            setcount(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


return(
    <div>
        {}
    </div>
)
}
export default MonthlyDashboard