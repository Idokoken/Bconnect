import React, { Component } from 'react'
import Posts from './Posts'
import styled from 'styled-components'
import { Tablet } from '../Responsive'
import CreatePost from './CreatePost'

const Wrapper = styled.div`
min-width: 100vw;
min-height: 100vH;
padding: 30px;
background-color: rgba(231, 240, 255, 1);
display: grid;
grid-tempalte-columns: 95%;
justify-content: center;
${Tablet({ gridTemplateColumns: "70%" })}

.main{
    background: white;
    padding: 30px;
    border-radius: 30px;
}
h1{
    color: rgba(11, 6, 222, 1);
    text-align: center;
    font-weight: 700;
}
`


class PostBox extends Component {
    render() {
        return (
            <Wrapper>

                <div className='main'>
                    <h1>Social App</h1>
                    <Posts />
                    <CreatePost />
                </div>

            </Wrapper>
        )
    }
}

export default PostBox
