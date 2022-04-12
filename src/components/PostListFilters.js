import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class PostListFilters extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="filter_things">
                        <div>
                            <input className="input" placeholder="Search post" type="text" />
                            <select className="select">
                                <option value="date">Title</option>
                                <option value="amount">Amount</option>
                            </select>
                        </div>
                        <Link className="btn" to="/add">Add Post</Link>
                    </div>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

export default PostListFilters