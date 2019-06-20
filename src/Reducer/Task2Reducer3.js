import *as ActionTypes from '../Actions/type';

const initialstate={
    num3:1
};
export default(state=initialstate,action)=>
{
    switch(action.type)
    {
       case ActionTypes.NUM3:
           {
               return {...state,num3:state.num3+action.payloadC};
           }
        default:
            return state;
        }
    }
    