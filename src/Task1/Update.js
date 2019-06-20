import React, { Component } from 'react';
import { connect } from 'react-redux';
class Update extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.a}</h1>
                <button onClick={this.props.onUpdateA}>UpdateA</button>
                <h1>{this.props.b}</h1>
                <button onClick={this.props.onUpdateB}>UpdateB</button>
                <h1>{this.props.c}</h1>
                <button onClick={this.props.onUpdateC}>UpdateC</button>
                <h1>{this.props.d}</h1>
                <button onClick={this.props.onUpdateD}>UpdateD</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>
{
    return {
        a:state.a,
        b:state.b,
        c:state.c,
        d:state.d
    };
}; 
const mapDispatchToProps=(dispatch)=>
{

    return {
    onUpdateA:()=>dispatch({type:'UPDATE_A'}),
    onUpdateB:()=>dispatch({type:'UPDATE_B'}),
    onUpdateC:()=>dispatch({type:'UPDATE_C'}),
    onUpdateD:()=>dispatch({type:'UPDATE_D'})
}
}

export default connect(mapStateToProps,mapDispatchToProps) (Update);

