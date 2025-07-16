import App from "./App";
import About from "./components/about/About";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/home/Home";
import Product from "./components/Product/Product";
import Shop from "./components/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: ":productId",
            element: <Product />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;
