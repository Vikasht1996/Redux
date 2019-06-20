const initialState={
    a:1,
    b:1,
    c:1,
    d:1
};
const reduce = (state=initialState,action)=>{
    debugger;
    const newState={...state};
    switch(action.type)
    {
        case 'UPDATE_A':
            newState.a+=newState.c;
        break;
        case 'UPDATE_B':newState.b+=newState.d;
        break;
        case 'UPDATE_C':
            newState.c+=newState.a;
        break;
        case 'UPDATE_D':newState.d+=newState.b;
        break;
        // default:
        //     return newState;
    }
    return newState;
}
export default reduce;