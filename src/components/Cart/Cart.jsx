/* eslint-disable react/prop-types */
import SelectedCart from "./SelectedCart";

const Cart = ({ cart, handleRemoveItem }) => {
    
    // eslint-disable-next-line 
    const { name, img, price } = cart;
    return (
        <div className="p-16">
            <h1 className="truncate text-3xl font-bold">Order Summery</h1>
            <p>Order quantity: {cart.length}</p>
            <table>
            <thead className="gap-2">
               
               <th>img</th>
               <th>name</th>
               <th>price</th>
          
            </thead>
            </table>
            <div>
                
                {
                    cart?.map(selectedItem =>
                        <SelectedCart key={selectedItem.id} selectedItem={selectedItem}
                        handleRemoveItem={handleRemoveItem}
                        ></SelectedCart>
                    )
                }
  
            </div>
        </div>
    );
};

export default Cart;