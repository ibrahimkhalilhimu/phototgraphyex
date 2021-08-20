import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LogIn from "./components/Auth/LogIn/LogIn";
import SignIn from "./components/Auth/SignIn/SignIn";
import AddService from "./components/Deshboard/Admin/AddService/AddService";
import MakeAdmin from "./components/Deshboard/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./components/Deshboard/Admin/ManageService/ManageService";
import OrderList from "./components/Deshboard/Admin/OrderList/OrderList";
import CheckOut from "./components/Deshboard/Customar/CheckOut/CheckOut";
import CheckOutList from "./components/Deshboard/Customar/CheckOutList/CheckOutList";
import Home from './components/Home/Home/Home';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServicesDetails from "./components/ServicesDetails/ServicesDetails";


export const userCardInfo = createContext()
export const userContext = createContext()

function App() {

  const [serviceCardInfo, setServiceCardInfo] = useState({})
  const [loggedInUser,setLoggedInUser] = useState({success: false})
  const [isAdmin,setIsAdmin] = useState(false)
  return (
    <div>

      
      <userCardInfo.Provider value={[serviceCardInfo,setServiceCardInfo]}>
      <userContext.Provider value={[loggedInUser,setLoggedInUser,isAdmin,setIsAdmin]} >
      <Router>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/service/:id">
        <ServicesDetails/>
      </Route>
      <PrivateRoute path="/checkOut">
        <CheckOut/>
      </PrivateRoute>
      <PrivateRoute path="/checkOutList">
        <CheckOutList/>
      </PrivateRoute>
      <PrivateRoute path="/makeAdmin">
        <MakeAdmin/>
      </PrivateRoute>
      <PrivateRoute path="/orderList">
        <OrderList/>
      </PrivateRoute>
      <PrivateRoute path="/manageServices">
        <ManageService/>
      </PrivateRoute>
      <PrivateRoute path="/addService">
        <AddService/>
      </PrivateRoute>
      <Route path="/login">
        <LogIn/>
      </Route>
      <Route path="/signIn">
        <SignIn/>
      </Route>
    </Switch>
      </Router>
      </userContext.Provider>
      </userCardInfo.Provider>
    </div>
  );
}

export default App;
