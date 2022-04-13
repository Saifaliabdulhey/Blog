import React from 'react'
import { Link } from 'react-router-dom'

function PostListItem({ id, description, title }) {
    return (
        <Link className="list_item" to={`/edit/${id}`}>
            <div className="container">
                <h3 className="list_item_title">{title}</h3>
            </div>
        </Link>


    )
}

export default PostListItem