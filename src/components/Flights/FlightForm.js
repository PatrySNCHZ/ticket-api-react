const FlightForm = () => {



    return (

        <form className='new-flight-forms'>
            <div className='new-flight-input'>
                <label>Name</label>
                <input type="text"></input>
            </div>
            <div className='new-flight-input'>
                <label>Surname</label>
                <input type="text"></input>
            </div>

            <div className='new-flight-input'>

                <label>Nationality</label>

                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>

            </div>

            <div className='new-flight-input'>
                <label>Identification</label>
                <input type="text"></input>
            </div>

            <div className='new-flight-input'>

                <label>Age</label>

                <select>
                    <option>Bebé</option>
                    <option>Niño</option>
                    <option>Adulto</option>
                </select>

            </div>
            <div>
                <input type="submit"></input>
            </div>

        </form>

    )

}



export default FlightForm;