import React, { Component } from 'react';
import { connect } from 'react-redux';

class Age extends Component {
    render() {
        return (
            <div>
                <h1>Youe Age:{this.props.age}</h1>
                <button onClick={this.props.onAgeUp}>AgeUp</button>
                <button onClick={this.props.onAgeDown}>AgeDown</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>
{
     return {age:state.age};
}; 
const mapDispatchToProps=(dispatch)=>
{

    return { onAgeUp:()=>dispatch({type:'AGE_UP'}),
    onAgeDown:()=>dispatch({type:'AGE_DOWN'})
}
}

export default connect(mapStateToProps,mapDispatchToProps) (Age);