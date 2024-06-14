import { useLoaderData } from "react-router-dom";
import Product from "../../components/Product/Product";
import Cart from "../../components/Cart/Cart";
import { useState } from "react";
import { Toaster, toast } from "sonner";


const Home = () => {
    const items = useLoaderData();
    const [cart, setCart] = useState([]);


    const handleAddToCart = itemCart => {
        // console.log(itemCart);
        const exists = cart.find(existsItem => existsItem.id === itemCart.id);
        if (exists) {
            toast.warning('item already added')
           
        }
        else {
            const newCart = [...cart, itemCart];
            setCart(newCart);
            toast.success('successfully added')
        }
        
    }


    const handleRemoveItem = item => {
        const remaining = cart.filter(i => i.id !== item.id)
        setCart(remaining)
    }

    return (
        <div className="flex mx-auto">
            <div  className="grid grid-cols-2 md:grid-cols-3  p-16 gap-5">
                {
                    items.map(item =>
                        <Product
                            key={item.id}
                            item={item}
                            handleAddToCart={handleAddToCart}
                        ></Product>
                    )    
                }
            </div>
            <div className="sticky top-4">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;