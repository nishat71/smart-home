import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage"
import Shop from "../components/Shop"
import { ProductsAndCartData } from "../loaders/getCart&ProductsData";
import Cart from "../components/Cart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: ProductsAndCartData,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/shop",
                element: <Shop />
            },
        ]
    }
])

export default router;