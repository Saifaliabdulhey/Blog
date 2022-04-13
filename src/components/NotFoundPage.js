import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="container">
        <h1>404! This Page Not Found</h1>
        <Link to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage();