import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { setTextFilter } from '../actions/filters'
import search from '../images/search.png'

export class PostListFilters extends Component {

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    render() {

        return (
            <div>
                <div className="container">
                    <div className="filter_things">
                        <div className="filter_search_box">
                            <input className="input" placeholder="Search post" type="text"
                                value={this.props.filters.text}
                                onChange={this.onTextChange} />
                                <img className="search_icon" src={search}/>
                        </div>
                        <Link className="btn" to="/add">Add Post</Link>
                    </div>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters)