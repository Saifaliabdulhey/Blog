import React, { Component, setState } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startRemovePost, startEditpost } from '../actions/posts';
import { Link } from 'react-router-dom'

export class EditPostPage extends Component {
    onSubmit = (post) => {
        this.props.startEditpost(this.props.post.id, post);
        this.props.history.push('/home');
    }
    onRemove = () => {
        this.props.startRemovePost({ id: this.props.post.id });
        this.props.history.push('/home');
    }

    render() {
        let path = window.location.origin;
        const id = this.props.match.params.id;
        return (
            <div>
                <div className="container">
                    <h1>Edit Post</h1>
                </div>
                <div className="container">
                    <PostForm
                        post={this.props.post}
                        onSubmit={this.onSubmit} />
                    <div className="container btn-container">
                        <button  onClick={this.onRemove}>Remove Post</button>
                    </div>
                    <Link className="read_link" to={`/read/${id}`}>
                    <h4><span>Post is Readable at:</span>{`${path}/read/${id}`}</h4>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditpost: (id, post) => dispatch(startEditpost(id, post)),
    startRemovePost: (data) => dispatch(startRemovePost(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);