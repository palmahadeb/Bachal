import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route path="/" element={<Registration />} ></Route>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/forgotpassword" element={<ForgotPassword />} ></Route>
    <Route path="/home" element={<Home />} ></Route>
   </Route>
  )
);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
 
  )
}

export default App
