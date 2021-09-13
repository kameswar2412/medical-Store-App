import React from 'react';
import './index.css'
import { connect } from 'react-redux';
import { adminLogout,sdd } from '../../redux/actions';
import { useHistory } from "react-router-dom";

const Topbar =({ loginStatus, logOutAdmin,inventoryList,searchData })=> {
    const history = useHistory()
   const searchValue=(e) => {
        const value=e.target.value
      let search =inventoryList.filter(v => v.manufacturerName.toLowerCase().includes(value) === true ||
     v.medicineName.toLowerCase().includes(value) === true  )
     searchData(search)
    }
   
        return (
            <div className="topbar-box">

                <div className="d-flex p-2 logo-part">
                <i class="fas fa-clinic-medical p-2"></i>
                <p className="logo-text">M-Store</p>
                </div >
                <div>
                <form className="form-inline">
                    <input className="form-control top-bar-text mr-sm-2" type="search" 
                     onKeyUp={searchValue} placeholder="Search" aria-label="Search" />
                </form>
                </div>
                <div className="p-2 user-logo">
                <i class="fas fa-user "></i>
                <div className="topbar-menu">
            {loginStatus && <p onClick={() => {
                localStorage.setItem('loginStatus', false)
                localStorage.setItem('adminLogin', false)
                localStorage.setItem('salesLogin', false)
                history.push("/");
                logOutAdmin()
            }} style={{ cursor: 'pointer' }}>Logout</p>}
                 </div>
                </div>
                
            </div>
        )

        }
const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus,
    inventoryList:state.inventoryList
    
})




const mapDispatchToProps = (dispatch) => ({
    logOutAdmin: () => dispatch(adminLogout('')),
    searchData:(payload)=>dispatch(sdd(payload))

})


export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
