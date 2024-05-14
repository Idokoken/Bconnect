import React from 'react'
import Reactions from './Reactions';
import { UPDATE_LIKES, UPDATE_UNLIKES } from '../context/action'
import axios from "axios";
import { BASE_URL } from "../API";

function PostReactions(props) {
    const updateLike = async (postId, like) => {
        try {
            await axios.put(`${BASE_URL}/posts/likes/${postId}/${like}`)
            return {
                type: UPDATE_LIKES,
                payload: postId
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateUnLike = async (postId, unlike) => {
        try {
            await axios.put(`${BASE_URL}/posts/unlikes/${postId}/${unlike}`)
            return {
                type: UPDATE_UNLIKES,
                payload: postId
            }
        } catch (error) {
            console.log('error uupdating unlikes' + error)
        }
    }
    const { like, unLike, comments, postId } = props
    return (
        <div>
            <Reactions like={like} unLike={unLike} comments={comments}
                onLike={() => updateLike(postId, like)}
                onUnlike={() => updateUnLike(postId, unLike)} />
        </div>
    )
}

export default PostReactions
