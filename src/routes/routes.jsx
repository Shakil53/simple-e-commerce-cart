import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                loader: () => fetch('tshirts.json'),
                element: <Home></Home>
            }
        ]
    }
    
])


export default router;