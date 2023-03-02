import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Layout from "./components/layout/Layout";
import UserDetails from "./pages/userDetails/UserDetails";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import "./style/global.scss"
import { useSelector } from "react-redux";
function App() {
  const darkMode=useSelector((state)=>state.theme.darkModeOn)

  return (
    <div className={darkMode?"app dark":""}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute/>}>        
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/new" element={<New />} />
            <Route path="/user/:userId" element={<UserDetails />} />
          </Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
