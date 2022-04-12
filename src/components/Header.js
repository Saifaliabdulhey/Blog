import React  from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'





export const Header = ({ startLogout }) => (

    <header className="header">
        <div className="container">
            <div className="header_content">
                <Link to="/home"><h1>My Blog</h1></Link>
                <button className="btn" onClick={startLogout}>logout</button>
            </div>
        </div>
    </header>

)

const mapStateToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapStateToProps)(Header)