import React, { Component } from 'react'
import Data from '../utils/Data'

class Posts extends Component {


    render() {
        const listPost = Data.map(c =>
            <div key={c.id}>
                <h3>{c.user}</h3>
                <p>{c.content}</p>
            </div>)
        return (
            <div>
                {listPost}
            </div>
        )
    }
}

export default Posts;
