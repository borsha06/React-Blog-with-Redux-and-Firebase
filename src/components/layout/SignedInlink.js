import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/action/authAction'

const SignedInlink = (props) =>{
    return(
       <ul className="right">
           <li><NavLink to="/create">New Project</NavLink></li>
           {/* // eslint-disable-next-line */}
           <li><a onClick={props.signOut}> Logout</a></li>
           <li><NavLink to="/" className="btn btn-floating pink lighten-1">
           {props.profile.initials}
           </NavLink></li>
       </ul>
    )
}
const mapDispatchToprops = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }

}

export default connect(null,mapDispatchToprops)(SignedInlink);