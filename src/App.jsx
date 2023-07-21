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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from "./Pages/Message";
import RootLayoout from "./component/RootLayoout";



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route path="/" element={<Registration />} ></Route>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/forgotpassword" element={<ForgotPassword />} ></Route>

    <Route path="/bachal" element={<RootLayoout />} >

        <Route path="home" element={<Home />} ></Route>
        <Route path="message" element={<Message />} ></Route>

    </Route>

   </Route>
  )
);

function App() {

  return (
    <>
   <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            
     />
           <RouterProvider router={router} />
    </>
 
  )
}

export default App
