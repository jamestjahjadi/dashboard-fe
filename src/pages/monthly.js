import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {API} from './../supports'
import {Bar} from 'react-chartjs-2';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap'

const MonthlyDashboard = () =>{

    
    const [state, setstate]=useState({
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      datasets:[]
    })

    const [data, setData]=useState({date: 0 ,year:0, name: ''})
    var date = new Date()
    var month = date.getMonth()

    useEffect(()=>{
      Axios.get(`${API}/monthly/${month}`)
      .then((res)=>{
        var DB = res.data      
        test(DB)
      }).catch((err)=>{
          console.log(err)
      })
  },[])


  const test=(data)=>{
    var i
    var dataset=[]
    for(i = 0 ; i < data.length ; i++){
    var date = data[i].CreatedDate-1
    var count = data[i].count
    var obj = {
    label: data[i].DisplayName,
    backgroundColor: 'rgba(75,192,192,1)',
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 2,
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
    dataset.push(obj)
    dataset[i].data.splice(date, 1, count)
    }
    ///////////////////////////////////////////////////
    var datasets=[]
    dataset.forEach(function(item) {
      var existing = datasets.filter(function(v, i) {
        return v.label == item.label;
      });
      if (existing.length) {
        var existingIndex = datasets.indexOf(existing[0])
       for(i = 0 ; i < 31 ; i++){
         if(item.data[i] < datasets[existingIndex].data[i] || item.data[i] > datasets[existingIndex].data[i] ){
          datasets[existingIndex].data.splice(i , 1 , 1)
         }
       }
      } else {
        if (typeof item.data == 'number')
          item.data = [item.data];
        datasets.push(item);
      }
    });
    console.log(datasets)
    return setstate({...state, datasets})
    }

  
    const button = () => {
      Axios.get(`${API}/filter`,{params:{...data}})
      .then((res)=>{
        test(res.data)
      }).catch((err)=>{
          console.log(err)
      })
    }

return(
    <div style={{width:'100%',marginLeft:'5px'}}>
       <div style={{widht:'70%', marginLeft:'60%', marginRight:'10%'}} >
    <InputGroup>
      
        <Input
        placeholder='insert name'
        name='name'
        type='text'
        value={data.name}
        onChange={(e)=>{setData({...data, name:e.target.value})}}
        />
        <Input
        placeholder='insert month'
        name='month'
        type='number'
        value={data.month}
        onChange={(e)=>{setData({...data, month:e.target.value})}}
        />
        <Input
        placeholder='insert year'
        name='year'
        type='number'
        value={data.year}
        onChange={(e)=>{setData({...data, year:e.target.value})}}
        />
      </InputGroup>
      <br></br>
        <ButtonGroup>
            <Button color="primary" onClick={()=>{button()}}>
                Insert data
            </Button>
        </ButtonGroup>
    </div>
    <Bar
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />
   
    
  </div>
)
}
export default MonthlyDashboard