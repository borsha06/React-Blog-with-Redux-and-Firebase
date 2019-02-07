import React from 'react'
import {Link} from 'react-router-dom'
import SignedInlink from './SignedInlink'
import SignedOutlink from './SignedOutLink';
import {connect} from 'react-redux'

const Navbar = (props) =>{
    const {auth,profile} = props
    console.log(auth)
    const links = auth.uid ? <SignedInlink profile={profile}></SignedInlink> : <SignedOutlink></SignedOutlink>
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Our Blog
                </Link>
                {links}
            </div>
        </nav>
    )
}
const mapToProps =(state) =>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }

}

export default connect(mapToProps)(Navbar);