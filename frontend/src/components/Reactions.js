import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
 display: flex;
 justify-content: flex-end;
 margin-bottom: 20px;
 padding: 0;

 span{
    margin-right: 3px;
 }
 .like, .unlike{
    color: rgba(223, 191, 20, 1);  
 }
 .fa{
    border: 2px solid black;
 }
 .reaction{
    margin-right: 8px;
 }
`

function Reactions(props) {
   return (
      <Wrapper>
         <span onClick={props.onLike}><i className='fa fa-thumbs-up like'></i></span>
         <div className='reaction'>{props.like}</div>
         <span onClick={props.onUnlike}><i className='fa fa-thumbs-down unlike'></i></span>
         <div className='reaction'>{props.unLike}</div>
         <span><i className='fa-solid fa-comment-dots comment'></i></span>
         <div className='reaction'>{props.comments}</div>
      </Wrapper>
   )
}

export default Reactions