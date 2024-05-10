import React, { useState } from 'react'
import styled from 'styled-components'

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
    const [values, setValues] = useState({ user: "", content: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        setValues({ values: '' })
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
