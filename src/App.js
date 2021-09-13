import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import Footer from './components/footer';
import Login from './components/Login';
import Topbar  from './components/Topbar';
import Madicine from './components/Admin/addMadicine';
import ViewN from './components/Admin/viewN';
import ViewT from './components/Admin/viewT';
import AddSalesExecutive from './components/Admin/addSalesExecutive';
import ViewOrder from './components/Vieworder';
import CeateOrder from "./components/Createorder"
import ShowOrder from './components/Admin/showOrder';
import COrder from "./components/Admin/cOrder"

const App = ({ adminLogin, loginStatus, salesLogin }) => {
  return ( 
    <div>
      
<BrowserRouter >
<div>
  <Topbar />
</div>
<Switch>
        <Route path="/" exact component={Login} />
        {adminLogin && loginStatus && <Route exact path="/admin/view_inventory"><ViewN /> </Route>}

          {adminLogin && loginStatus && <Route path="/admin/add_medicine"><Madicine /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/add_sales_executive"><AddSalesExecutive /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/view_team"><ViewT /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/show_all_orders"><ShowOrder /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/create_orders"><COrder /> </Route>}
          {salesLogin && loginStatus && <Route path="/sales_executive/create_order">< CeateOrder /></Route>}
          {salesLogin && loginStatus && <Route path="/sales_executive/view_orders"><ViewOrder /> </Route>}
       
</Switch>
<div>
<Footer />
</div>
</BrowserRouter>
    </div>
   );
}
const mapStateToProps = (state) => ({
  adminLogin: state.adminLogin,
  loginStatus: state.loginStatus,
  salesLogin: state.salesLogin
})
export default connect(mapStateToProps, null)(App)
 
