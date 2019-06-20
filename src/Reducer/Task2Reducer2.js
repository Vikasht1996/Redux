import *as ActionTypes from '../Actions/type';

const initialstate={
    num2:1
};
export default(state=initialstate,action,)=>
{
    switch(action.type)
    {
       case ActionTypes.NUM2:
           {
               return {...state,num2:state.num2+action.payloadB};
           }
        default:
            return state;
        }
    }
    