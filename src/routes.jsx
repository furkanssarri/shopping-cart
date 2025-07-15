import App from "./App";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage";
import Product from "./components/Product/Product";
import Shop from "./components/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
];

export default routes;
