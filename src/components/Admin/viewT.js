import React, { useState } from 'react';
import Admin from './admin';
import { connect } from 'react-redux';
import "./viewT.css";
import { updateTeamList,userIdForUpdate } from "../../redux/actions";
import UpdateExecutiveDetails from './updateExecutive';


const ViewTeam = ({ teamList, team_list_after_delete, user_id_for_update,team }) => {
    const [isUpdateForm, setIsUpdateForm] = useState(false);
console.log(team)
    const delete_sales_executive_by_id = (executiveId) => {
        var teamListAfterDelete = JSON.parse(localStorage.getItem('teamList')) || [];

        teamListAfterDelete = teamListAfterDelete.filter(item => item.salesExecutiveId !== executiveId)
       
        localStorage.setItem('teamList', JSON.stringify(teamListAfterDelete));
       
        team_list_after_delete(executiveId)
    }

    // Update Sales Executive Details By ID
    const update_sales_executive_by_id = (id) => {
        setIsUpdateForm(true)
        localStorage.setItem('userIdForUpdate', id)
        user_id_for_update(id)
    }


    const crossClick = () => {
        console.log("Clicked")
        setIsUpdateForm(false)
    }

    return (<div className="view_team">
        <div>
        <Admin />
        </div>
        {isUpdateForm && <UpdateExecutiveDetails userIdForUpdate={userIdForUpdate} 
        crossClick={crossClick} />}
            <div >
                <div className="team_container_header">
                <p className="sales_executive_id">UserId</p>
                <p className="sales_executive_fname">First Name</p>
                <p className="sales_executive_lname">Last Name</p>
                <p className="sales_executive_dob">DOB</p>
                <p className="sales_executive_gender">Gender</p>
                <p className="sales_executive_experience">Experience</p>
                </div>
                {teamList.map(item => <SalesExecutiveCard executiveDetails={item}
             delete_sales_executive_by_id={delete_sales_executive_by_id}
              key={Math.random()} update_sales_executive_by_id={update_sales_executive_by_id} />)}
        

            </div>
            
    </div >);
}


const mapStateToProps = (state) => ({
    teamList: state.teamList,
    userIdForUpdate: state.userIdForUpdate,
    team:state.employeData
})

const mapDispatchToProps = (dispatch) => ({
    team_list_after_delete: (payload) => dispatch(updateTeamList(payload)),
    user_id_for_update: (payload) => dispatch(userIdForUpdate(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTeam)




// Sales Executive card
const SalesExecutiveCard = (props) => {
    const { firstName, lastName, dob, gender, experience, salesExecutiveId } = props.executiveDetails
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="sales-executive-card" key={Math.random()} >
                <span className="sales_executive_id">{salesExecutiveId}</span>
                <span className="sales_executive_fname">{firstName}</span>
                <span className="sales_executive_fname">{lastName}</span>
                <span className="sales_executive_dob">{dob}</span>
                <span className="sales_executive_gender">{gender}</span>
                <span className="sales_executive_experience">{experience}</span>
                <div style={{ marginLeft: "10px", cursor: "pointer", marginRight: "10px" }} 
            onClick={() => props.delete_sales_executive_by_id(salesExecutiveId)} >
                 <i className="fas fa-trash"></i>
            </div>

            <div style={{ cursor: "pointer" }}
             onClick={() => props.update_sales_executive_by_id(salesExecutiveId)} >
                  <i className="fas fa-edit"></i>
            </div>
            </div>
            
            
        </div>
    );
}


