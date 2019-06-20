import * as ActionTypes from './type';
export function onClickA(num3)
{
    return function(dispatch)
    {
        dispatch({type:'NUM1',payloadA:num3});
    }
}
export function onClickB(num4)
{
    return function(dispatch)
    {
        dispatch({type:'NUM2',payloadB:num4});
    }
}
export function onClickC(num1)
{
    return function(dispatch)
    {
        dispatch({type:'NUM3',payloadC:num1});
    }
}
export function onClickD(num2)
{
    return function(dispatch)
    {
        dispatch({type:'NUM4',payloadD:num2});
    }
}