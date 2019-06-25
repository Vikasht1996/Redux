import React, { Component } from 'react';

class Task4 extends Component
{ 
   constructor(props)
   {
       super(props);
        this.state={
            name:'',
            age:'',
            city:'',
            address:'',
            array:[]
        }
    }
    
    handleChange = (e)=>{
        // e.prventDefault();

        this.setState({[e.target.name]:e.target.value});
       
    }
    submit = (e) => {
        // e.preventDefault();
        
        
        const  val ={ name:this.state.name,
               age:this.state.age,
               city:this.state.city,
               address:this.state.address
        } ;
        let x = this.state.array.push(val);
        this.setState({x})
        // document.getElementById('name').innerHTML=this.state.name;
        // document.getElementById('age').innerHTML=this.state.age;
        // document.getElementById('city').innerHTML=this.state.city;
        // document.getElementById('address').innerHTML=this.state.address;

    
}
    render() {
        return (
            <div>
  <center> 
      <form>
  <label>
    Name:
    <input type="text" name="name"  onChange={this.handleChange}/>
  </label><br/>
  <label>
    Age:
    <input type="text" name="age"  onChange={this.handleChange}/>
  </label><br/>
  <label>
    City:
    <input type="text" name="city"  onChange={this.handleChange}/>
  </label><br/>
  <label>
    Address:
    <input type="text" name="address"  onChange={this.handleChange}/>
  </label><br/>
  </form>
  <button onClick={this.submit}>Submit</button>
  {this.state.array.map((display) =>(

<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Address</th>
    </tr>
    <tr>
        <td>{display.name}</td>
        <td>{display.age}</td>
        <td>{display.city}</td>
        <td>{display.address}</td>
        {/* <td id="name"></td>
        <td id="age"></td>
        <td id="city"></td>
        <td id="address"></td> */}
    </tr>
</table>
   )) }

</center>

            </div>
        );
    }
}

export default Task4;