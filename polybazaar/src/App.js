import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import "./components/Navbar/navbar.css";

import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen_otp from "./screens/Loginscreen_otp";
import Loginscreen_password from "./screens/Loginscreen_password";
import Typesscreen from "./screens/Typesscreen";

import Termlife from "./screens/LifeInsurance";
import  MaxLifeCheckout  from "./screens/MaxLifeCheckout";


import MaxLifeCheckout_upgrade from './screens/MaxLifeCheckout_upgrade';
import MaxLifeCheckout_AddOnRider from './screens/MaxLifeCheckout_AddOnRider';
import Payment from "./screens/Payment";

function App() {
  return (
    <div className="App">

    < Navbar />

    <BrowserRouter>
      <Routes>

       <Route path="/" exact element={<Homescreen />} />
       <Route path="/login" exact element={<Loginscreen />} />
       <Route path="/register" exact element={<Registerscreen />} />
       <Route path="/login_otp" exact element={<Loginscreen_otp  />} />
       <Route path="/login_password" exact element={<Loginscreen_password  />} />
       <Route path="/typescreen" exact element={<Typesscreen />} />
        <Route path="/termlife" exact element={<Termlife />} />

        <Route path="/maxlifecheckout" exact element={<MaxLifeCheckout />} />
        <Route  path={"/Checkout/upgradePlan"} element={<MaxLifeCheckout_upgrade/>}></Route>
        <Route  path={"/Checkout/upgradePlan/AddOnRider"} element={<MaxLifeCheckout_AddOnRider/>}></Route>
       
        <Route path="/payment" exact element={<Payment />} />
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
