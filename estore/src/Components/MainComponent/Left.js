import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import * as actions from "../../redux/actions/Products"

const Left=()=>{
    const dispatch=useDispatch();

    const {product}=useSelector((obj)=>obj);
    useEffect(()=>{
         dispatch(actions.getProductCategory())
    },[dispatch])
    
    return (
        <div className="mb-50 mt-10 w-[200px] border-2">
            <div className="text-2xl " >Categories</div>
            <div className="pl-5 ">
                
                <ul className="">
                    {
                        product.categories.map((item,index)=>{

                           return  <ul key={index} className="text-2xl">{item.Category}
                           {
                             item.SubCategory.map((subItem,ind)=>{
                                return <li key={ind} className="text-sm hover:underline"><a href="/">{subItem.Name}</a></li>
                                
                             })
                           }
                           </ul>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Left;