import * as actionTypes from "./types"

export const addCart=(data)=>async(dispatch)=>{
    dispatch(_addCart(data))
}
export const _addCart=(data)=>{
         return {
            type:actionTypes.addCartItems,
            data
         }
}