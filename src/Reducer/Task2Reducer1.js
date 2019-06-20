import *as ActionTypes from '../Actions/type';

const initialstate={
    num1:1
};
export default(state=initialstate,action)=>
{
    switch(action.type)
    {
       case ActionTypes.NUM1:
           {
               return {...state,num1:state.num1+action.payloadA};
           }
        default:
            return state;
        }
    }
    