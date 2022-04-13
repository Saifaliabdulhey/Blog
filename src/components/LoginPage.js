import React from 'react'
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import google from '../images/google.png'
// import background from '../images/background.jpg'

export const LoginPage = ({ startLogin }) => (
    <div className="login-page">
        <div className="login_container">
            <h1>Blog</h1>
            <button className="login_btn" onClick={startLogin}>Login with Google</button>
            <img src={google} />
        </div>
    </div>

)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);