import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handle} from '../Actions/LoginAction'
class Task3 extends Component {
    render() {
        return (
            <div>
   <center>        
 <form>
  <label>
    UserName:
    <input type="text" name="name"/>
  </label><br/>
  <label>
    Password:
    <input type="password" name="name"/>
  </label><br/>
  </form>

  <h1>{this.props.message}</h1>
  <button onClick={this.props.handle}>Submit</button>

</center>
            </div>
        );
    }
}
const mapStoreToProps= (state)=>
{
    const { message }=state.LoginReducer;
   

    return { message };
}


export default connect(mapStoreToProps,{handle})(Task3);