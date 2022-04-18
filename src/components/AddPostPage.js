import React, { Component } from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { startAddPosts } from '../actions/posts'

export class AddPostPage extends Component {

    onSubmit = (post) => {
        this.props.startAddPosts(post);
        this.props.history.push("/home")
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Add Post</h1>
                </div>
                <div className="container">
                    <PostForm  onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPosts: (post) => dispatch(startAddPosts(post))
})

export default connect(undefined, mapDispatchToProps)(AddPostPage);
