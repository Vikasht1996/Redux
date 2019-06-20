import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onClickA,onClickB,onClickC,onClickD} from '../Actions/Task2Action';
class Main extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num1}</h1>
                <button onClick={()=>this.props.onClickA(this.props.num3)}>ClickA</button>
                <h1>{this.props.num2}</h1>
                <button onClick={()=>this.props.onClickB(this.props.num4)}>ClickB</button> 
                <h1>{this.props.num3}</h1>
                <button onClick={()=>this.props.onClickC(this.props.num1)}>ClickC</button>
                <h1>{this.props.num4}</h1>
                <button onClick={()=>this.props.onClickD(this.props.num2)}>ClickD</button>   
            </div>
        );
    }
}
const mapStoreToProps= (state)=>
{
    const { num1 }=state.Task2Reducer1;
    const { num2 }=state.Task2Reducer2;
    const { num3 }=state.Task2Reducer3;
    const { num4 }=state.Task2Reducer4;

    return { num1,num2,num3,num4 };
}

export default connect(mapStoreToProps,{onClickA,onClickB,onClickC,onClickD})(Main);