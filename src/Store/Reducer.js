const initialState={
    age:20
};
const reduce = (state=initialState,action)=>{
    const newState={...state};
    switch(action.type)
    {
        case 'AGE_UP':newState.age++;
        break;
        case 'AGE_DOWN':newState.age--;
        break;
    }
    return newState;
}
export default reduce;