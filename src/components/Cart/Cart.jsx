/* eslint-disable react/prop-types */

import SelectedCart from "./SelectedCart";

const Cart = ({ cart, handleRemoveItem }) => {
    
    // eslint-disable-next-line 
    const { name, img, price } = cart;

    let message;
    if (cart.length === 0) {
        message = <p className="text-orange-500">Please buy at least one item !!</p>
    }


    //pricing
    let total = 0;
    for (const product of cart) {
        total = total + parseFloat(product.price)
    }

  

    return (
        <div className="p-16">
            <h1 className="truncate text-3xl font-bold">Order Summery</h1>
            
            
            <div>
                <table>
                    <thead>
                        <tr className="flex gap-10 p-2 rounded-lg">
                            <th className="font-semibold">Img</th>
                            <th className="font-semibold">name</th>
                            <th className="font-semibold">price</th>
                        </tr>
                    </thead>
                </table>
                {
                    message
                }
         
                {
                    cart?.map(selectedItem =>
                        <SelectedCart key={selectedItem.id} selectedItem={selectedItem}
                        handleRemoveItem={handleRemoveItem}
                        ></SelectedCart>
                    )
                }
  
            </div>
            {/* pricing */}
            <div className="mt-5">
            <p className="text-gray-500 text-xs font-bold">Number of Items:<span> {cart.length}</span></p>
                <p className="text-green-500 font-semibold ">Total Price: {total.toFixed(2) }</p>
            </div> 
        </div>
    );
};

export default Cart;