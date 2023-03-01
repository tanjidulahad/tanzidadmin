import Home from "./pages/home/Home";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Layout from "./components/layout/Layout";
import UserDetails from "./pages/userDetails/UserDetails";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="new" element={<New />} />
          <Route path="user/:userId" element={<UserDetails />} />
        </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
