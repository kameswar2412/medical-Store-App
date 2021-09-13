import React, { Component } from 'react'
import { connect } from 'react-redux'
import Admin from '../Admin'
import Login from '../Login'
import SalesExecutive from './SalesExecutive'
import { orderData,employeeData } from '../../redux/actions'

export class Home extends Component {

    render() {
        const {loginStatus, adminLogin, salesLogin}=this.props

        return (
            <div>
                {adminLogin === true && loginStatus === true && <Admin />}
            {salesLogin === true && loginStatus === true && <SalesExecutive />}
            {loginStatus === false && <Login />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loginStatus : state.loginStatus,
    adminLogin : state.adminLogin,
    salesLogin : state.salesLogin
})

const mapDispatchToProps = (dispatch) => ({
    orderData:(payload) => dispatch(orderData(payload)),
    employeeData:(payload) => dispatch(employeeData(payload))

})





export default connect(mapStateToProps, mapDispatchToProps)(Home)

