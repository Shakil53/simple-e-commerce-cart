/* eslint-disable react/prop-types */

import { Button } from "antd";

const SelectedCart = ({ selectedItem, handleRemoveItem}) => {
    const {img, price, name} = selectedItem;
    return (
        <table>
          
        <tbody className="flex gap-2 justify-center items-center">
          <th><img className="size-10 rounded-2xl bg-green-100 p-1" src={img}></img></th>
          <th className="font-normal">{name}-</th>
          <th>${price}</th>
                <th><Button
                onClick={()=>handleRemoveItem(selectedItem)}
                >X</Button></th>
        </tbody>
           
  
  </table>
    );
};

export default SelectedCart;