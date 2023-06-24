import { RouterProvider, createBrowserRouter } from "react-router-dom";

// utilities
import { PATHS } from "@config/constants/paths";

// components
import { Auth } from "@pages/auth";
import { Home, Layout } from "@pages/home";

const App = () => {
  const router = createBrowserRouter([
    // unprotected routes
    {
      path: PATHS.HOME,
      element: <Layout />,
      children: [
        {
          path: PATHS.HOME,
          element: <Home />
        },
        {
          path: PATHS.AUTH,
          element: <Auth />
        },
      ]
    },
    // protected routes
  ])
  return (
    <RouterProvider router={router} />
  )
};

export default App;