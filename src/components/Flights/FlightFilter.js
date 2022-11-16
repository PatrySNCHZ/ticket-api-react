const FlightFilter = () => {

    return(
        <div>
            <div>
                <label>Airline </label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div>
                <label>Date: </label>
                <input type="date"></input>
            </div>
            <div>
                <label>Allow Luggage?</label>
                <input type="checkbox"></input>
            </div>
            <div>
                <label>By Schedule</label>
                <br/>
                <label>From</label>
                    <input type="time"></input>
                <label>To:</label>
                <input type="time"></input>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </div>
    )
}

export default FlightFilter;