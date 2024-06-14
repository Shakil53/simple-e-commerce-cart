/* eslint-disable react/prop-types */

import { Button } from "antd";
import { Toaster } from "sonner";



const Product = ({ item, handleAddToCart }) => {
    const { name,img, company, price } = item;
    
    return (
     
        <div className="border-2 p-5 rounded-lg shadow-sm hover:shadow-xl">
            <div className="gap-2">
                <img className="size-60" src={img}></img>
                <p className="text-xl font-semibold truncate">{name}</p>
                <p className="text-gray-400 truncate">{company}</p>
                <p className="text-gray-600 text-sm font-bold mt-1">${price}</p>
            </div>
            <div className="mt-5 text-end">
                <Button
                    onClick={()=>handleAddToCart(item)}
                    className="font-semibold">Add to cart</Button>
                 <Toaster richColors/>
            </div>
        </div>
   
    );
};

export default Product;