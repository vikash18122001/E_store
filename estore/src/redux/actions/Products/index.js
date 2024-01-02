import * as actionTypes from "./types";
import axios from "axios"




export const getProducts=()=>async(dispatch)=>{
    await axios({
        method:'get',
        url:'http://localhost:5000/product/api/getProducts'
    }).then((res)=>{
        try {
            let productList=res.data.data.map((item)=>{
                return {
                    Id:item.id,
                    imgSrc:`http://localhost:5000/${item.productimg}`,
                    name:item.productname,
                    price:item.price
                }

            })
            dispatch(_getProducts(productList));
        } catch (error) {
            console.log(error)
        }
    }).catch((err)=>{
         console.log(err);
    })
  
   
}
export const getProductCategory=()=>async(dispatch)=>{
    let tempCat=[];
    await axios({
        method:"get",
        url:"http://localhost:5000/product/api/getcategories",

    }).then((res)=>{
        
        let parentCat=res.data.data.filter(x=>x.parentcategoryid===null);
       
        parentCat.map((item)=>{
            let t={
                Id: item.id,
                Category:item.category,
                SubCategory:res.data.data
                .filter(x=>x.parentcategoryid===item.id)
                .map(y=>{
                  return { Id: y.id,
                    Name: y.category}
                })
                
            }
            
            return tempCat.push(t);

        })

    }).catch((err)=>{
        console.log("error",err);
    })
    dispatch({
        type:actionTypes.Product_category,
        data:tempCat
    })
}

export const _getProducts=(data)=>{
    return {
        type:actionTypes.Product,
        data

    }
}