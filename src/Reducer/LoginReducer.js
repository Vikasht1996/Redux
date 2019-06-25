import  *as ActionTypes from '../Actions/type'
const initialstate={
    message:''
};
export default(state=initialstate,action)=>{
    switch(action.type){
        case ActionTypes.FETCH_LIGON_SUCCESS:
            return {...state,message:'Login Successfully'};  
            default:
                    return state; 
        }
}