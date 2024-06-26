import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { styled } from 'styled-components';
import {
    FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS,
} from '../context/action'
import axios from "axios";
import { BASE_URL } from "../API";
import PostReactions from './PostReactions';

const Wrapper = styled.div`
    padding-top: 30px;

    .post{
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 20px;
        padding-top: 10px;
        padding-right: 10px;
        margin-bottom: 30px;
    }
    .post h3{
        font-weight: 700;
    }

`

function Posts() {
    const { state, dispatch } = useAppContext()

    useEffect(() => {
        const fetchPost = async () => {
            dispatch({ type: FETCH_DATA_REQUEST });
            try {
                const response = await axios.get(`${BASE_URL}/posts`);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
            } catch (error) {
                dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
            }
        };
        fetchPost()

    }, [dispatch])

    const listPost = state.posts && state.posts.map(c =>
        <div key={c.id} className='post'>
            <PostReactions
                like={c.likeCount}
                unLike={c.unLikeCount}
                comments={c.comments !== null ? c.comments.length : 0}
                postId={c.id}
            />
            <h3>{c.user}</h3>
            <p>{c.content}</p>

        </div>)
    return (
        <Wrapper>
            <div className=''>
                {listPost}
            </div>
        </Wrapper>
    )
}


export default Posts;
