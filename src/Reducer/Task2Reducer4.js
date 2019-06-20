import *as ActionTypes from '../Actions/type';

const initialstate={
    num4:1
};
export default(state=initialstate,action)=>
{
    switch(action.type)
    {
       case ActionTypes.NUM4:
           {
               return {...state,num4:state.num4+action.payloadD};
           }
        default:
            return state;
        }
    }
    