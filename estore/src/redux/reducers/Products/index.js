import * as actionTypes from "../../actions/Products/types"

const initialState={
    categories:[],
    products:[]
}

export const product =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.Product_category:
            return {
                ...state,
                categories:action.data
        }
        case actionTypes.Product:
            return {
                ...state,
                products:action.data
            }
        default:{
            return state
        }
    }
}