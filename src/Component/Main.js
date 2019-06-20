import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onAgeUp,onAgeDown} from '../Actions/AgeupdownAction';
class Main extends Component {
    render() {
        return (
            <div>
                <span>Your age:{this.props.age}</span>
                <button onClick={this.props.onAgeUp}>AgeUp</button>
                <button onClick={this.props.onAgeDown}>AgeDown</button>   
            </div>
        );
    }
}
const mapStoreToProps=(state)=>
{
    const { age }=state.AgeupdownReducers;
    return { age };
}

export default connect(mapStoreToProps,{onAgeUp,onAgeDown})(Main);