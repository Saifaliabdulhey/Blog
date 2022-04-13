import React  from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import logout  from '../images/options.png'





export const Header = ({ startLogout }) => (

    <header className="header">
        <div className="container">
            <div className="header_content">
                <Link className="logo" to="/home">
                <h1>Blog</h1>
                </Link>
                <img onClick={startLogout} src={logout} />
            </div>
        </div>
    </header>

)

const mapStateToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapStateToProps)(Header)