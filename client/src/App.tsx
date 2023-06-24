import { RouterProvider, createBrowserRouter } from "react-router-dom";

// utilities
import { PATHS } from "@config/constants/paths";

// components
import { Layout, Login, Signup } from "@pages/auth";
import { Home } from "@pages/home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: PATHS.LOGIN,
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        { path: PATHS.SIGNUP, element: <Signup /> }
      ]
    },
    {
      path: PATHS.HOME,
      element: <Home />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
};

export default App;