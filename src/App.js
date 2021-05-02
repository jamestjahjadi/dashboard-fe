import React from 'react';
import NavbarDashboard from './component/navbar'
import Monthly from './pages/monthly'
import Summary from './pages/summary'
import { Route } from 'react-router-dom'
import './App.css';


class App extends React.Component {
  render(){
  return (
    <div>
       <NavbarDashboard/> 
       <Route path='/summary' component={Summary} />
       <Route path='/monthly' component={Monthly}/>
    </div>
  );
  }
}


export default App;
