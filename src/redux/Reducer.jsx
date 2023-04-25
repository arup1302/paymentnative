const initialState={
    count:0
};


const changeNumberReducer=(state= initialState,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                count:state.count+1
            } ;
                
            
            case "REMOVE_FROM_CART":
               return {
                ...state,
                count:(state.count>0?state.count-1:state.count)
            } ;
               
               
               
                    
        default: return state
    }
 }
 export default changeNumberReducer