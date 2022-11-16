import React from "react";

export default class BuyTicket extends React.Component{
    state = {
        name: ''
    }

    handleChange = event =>{
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

    const ticket = {
        name: this.state.name
    };

    axios.post("https://localhost:8080/vuelos", {ticket})
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })

}

render(){
    return(
        <div>
            <form>
                <label>
                    Ticket Info:
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
        )
    }
}