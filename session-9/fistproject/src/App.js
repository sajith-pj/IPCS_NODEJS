import "./App.css";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import UserList from "./Pages/Users";
import Counter from "./Pages/Counter";
import ClassComponent from "./Pages/ClassComponent";
import Layout from "./Components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user-list",
      element: <UserList />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/class",
      element: <ClassComponent />,
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <div className="container">
    //   <Navbar />
    //   <Login />
    // </div>
  );
}

export default App;
