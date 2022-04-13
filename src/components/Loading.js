import React from 'react';
import  loader from '../images/loading.gif'

function Loading() {
  return (
    <div className="loading">
    <img src={loader}/>
    </div>
  )
}

export default Loading