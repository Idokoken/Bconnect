import {
    FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUEST,
    POST_DATA_SUCCESS, UPDATE_LIKES, UPDATE_UNLIKES
} from './action'


const Reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCESS:
            console.log('getting post', payload)
            return { ...state, loading: false, posts: payload, error: null };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: payload };

        case POST_DATA_REQUEST:
            return { ...state, loading: true };
        case POST_DATA_SUCCESS:
            console.log('getting post', payload)
            return { ...state, loading: false, posts: [...state.posts, payload], error: null };
        case POST_DATA_FAILURE:
            return { ...state, loading: false, error: payload };
        case UPDATE_LIKES:
            console.log('updating post likes', payload)
            return {
                ...state, posts: state.posts.map((post, i) => {
                    if (post.id !== payload) {
                        return post
                    }
                    return {
                        ...post,
                        likeCount: post.likeCount + 1
                    }
                })
            };
        case UPDATE_UNLIKES:
            console.log('updating post unlikes', payload)
            return {
                ...state, posts: state.posts.map((post, i) => {
                    if (post.id !== payload) {
                        return post
                    }
                    return {
                        ...post,
                        unLikeCount: post.unLikeCount + 1
                    }
                })
            };

        default:
            throw new Error(`No such action ${type}`)
        // return state
    }
}

export default Reducer