import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

import '@fortawesome/fontawesome-free/css/all.min.css';






const Right = () => {
 
  const dispatch = useDispatch();

  const { product: { products } ,cart} = useSelector((state) => state);

  useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);
  useEffect(() => {
    console.log("from",cart)
  }, [cart]);
  const addCart = (item) => {
   
    //console.log(item);
    dispatch(actions.addCart(item));
  };

  return (
    <div className="mb-8 mt-10 w-full border-2">
      <div className="text-3xl">Products</div>

      <div className="flex flex-wrap gap-4">
        {products.map((item, index) => (
           <div className="block">
           <img alt="" src={item.imgSrc}></img>
           <div>{item.name}</div>
           <div>${item.price}</div>
           <a href={null} onClick={() => addCart(item)}>
             <i className="fas fa-shopping-cart"></i>
           </a>
           
         </div>
        
        ))}
      </div>
    </div>
  );
};

export default Right;
