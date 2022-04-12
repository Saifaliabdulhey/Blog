import React from 'react'
import { connect } from 'react-redux'

function Read(props) {
  let posts = props.post.filter(item => item.id === props.match.params.id)[0];
  return (
    <div className="container">
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </div>
  )
}
const mapStateToPraps = (state) => ({
  post: state.posts
})
export default connect(mapStateToPraps)(Read)




