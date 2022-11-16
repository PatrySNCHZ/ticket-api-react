import logo from './logo.svg';
import './App.css';
import FlightForm from './components/Flights/FlightForm';
import FlightFiter from './components/Flights/FlightFilter';
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000/"
});

function App() {
  return (
    <div className="App">
      
      <FlightFiter/>
      <FlightForm/>

    </div>
  );
}

export default App;
