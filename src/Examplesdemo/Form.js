import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            city:''
        }
    }
    handleChange = (e)=>{
        // e.prventDefault();

        this.setState({[e.target.name]:e.target.value});
        console.log("Name = ",this.state.name);
        console.log("City = ",this.state.city);
    }
    submit = (e) =>{ 
        e.preventDefault();
        const obj1={
            name:this.state.name,
            city:this.state.city   
        }
        console.log(obj1);
    }

    render() {
        return (
            <div>
     {/* <form> */}
  <label>
    Name:
    <input type="text" name="name" onChange={this.handleChange}/>
  </label>
  <input type="text" name="city" onChange={this.handleChange} />
  <button onClick={this.submit}>Submit</button>
{/* </form> */}
            </div>
        );
    }
}

export default Form;