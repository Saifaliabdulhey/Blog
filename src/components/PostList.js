import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import selectPosts from '../selectors/posts';


export const PostList = (props) => {
    return (
        <div className="content-container">
            <div className="list-body">
                {

                   props.posts.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>Loading...</span>
                        </div>
                    ) : (
                        props.posts.map((post) => {
                            return <PostListItem key={post.id} {...post} />
                        })
                    )
                }
            </div>
        </div>
    )
}
const mapStateToPraps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters.text)
    }
};
export default connect(mapStateToPraps)(PostList);