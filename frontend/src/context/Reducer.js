import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './action'


const Reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {

        // case GET_POSTS:
        //     console.log('getting post', payload)
        //     return {
        //         ...state,
        //         posts: payload
        //     };
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCESS:
            console.log('getting post', payload)
            return { ...state, loading: false, posts: payload, error: null };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            throw new Error(`No such action ${type}`)
        // return state
    }
}

export default Reducer