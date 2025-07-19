import App from "./App";
import About from "./pages/about/About";
import Cart from "./pages/Cart/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";

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
      },
      {
        path: ":id",
        element: <Product />,
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
