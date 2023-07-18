import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route path="/" element={<Registration />} ></Route>
    <Route path="/login" element={<Login />} ></Route>
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
