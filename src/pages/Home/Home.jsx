import { useLoaderData } from "react-router-dom";
import Product from "../../components/Product/Product";
import Cart from "../../components/Cart/Cart";


const Home = () => {
    const items = useLoaderData();
    return (
        <div className="flex mx-auto">
            <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-5">
                {
                    items.map(item =>
                        <Product
                            key={item.id}
                            item= {item}
                        ></Product>
                    )    
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;