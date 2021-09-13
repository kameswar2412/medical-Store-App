import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SalesExecutive = () => {
    return (
        <div className="sales_executive_body">
            <div className="sales_executive_header">
            <Link to="/sales_executive/view_orders" 
                className="sales_executive_button">View Order</Link>
            <Link to="/sales_executive/create_order" 
                className="sales_executive_button" style={{marginTop:"40px"}}>Create Order</Link>
               
            </div>
        </div>
    );
}
 
export default SalesExecutive;