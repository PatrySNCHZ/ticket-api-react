import axios from "axios";
import React from "react";

export default class FlightInfo extends React.Component {
    state = {
        flights: []
    }

getAllFlightsInfo() {
    axios.get('https://localhost:8080/listavuelos')
    .then(res => {
        const flights = res.data;
        this.setState({flights})
})
}

render() {
    return(
        <ul>
            {
                this.state.flights
                .map(flights =>
                    <li key={flights.airline}>{flights.airline}</li>)
            }
        </ul>
    )
}
}


