import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import { BASE_URL } from "../API";
import { useAppContext } from '../context/AppContext'
import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from '../context/action'

const Wrapper = styled.div`


form{
    display: flex;
    flex-direction: column;

    input{
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 30px;
    }
   textarea{
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 30px;
    }
    button{
        width: 100px;
    }

}

`

function CreatePost() {
    const initialDetails = { user: "", content: "" }
    const [values, setValues] = useState(initialDetails)
    const { dispatch } = useAppContext()

    const postData = async (post) => {
        dispatch({ type: POST_DATA_REQUEST });
        try {
            const response = await axios.post(BASE_URL + '/posts', post);
            console.log(response)
            dispatch({ type: POST_DATA_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: POST_DATA_FAILURE, payload: error.message });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const { user, content } = values
        const details = { user, content }
        postData(details)

        setValues(initialDetails)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }


    return (
        <Wrapper>
            <h3>Create Post</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='your name'
                    required
                    name="user"
                    value={values.user}
                    className='p-2 mb-3'
                    onChange={handleChange} />

                <textarea
                    placeholder='write your post here...'
                    rows="4"
                    name='content'
                    value={values.content}
                    required
                    onChange={handleChange}
                >
                </textarea>
                <button className='btn btn-primary'>Post</button>
            </form>
        </Wrapper>
    )
}

export default CreatePost
