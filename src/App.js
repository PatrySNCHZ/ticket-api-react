//import logo from './logo.svg';
import './App.css';
import FlightForm from './components/Flights/FlightForm';
import FlightFilter from './components/Flights/FlightFilter';
import axios from 'axios';
import FlightInfo from './components/FlightInfo';
import {BrowserRouter, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      <FlightFilter/>

                <FlightForm/>

   
      <FlightInfo/>

    </div>
  );
}

export default App;
