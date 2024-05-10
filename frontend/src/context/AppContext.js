import React, { useReducer, useContext } from "react";
import Reducer from "./Reducer";


export const AppContext = React.createContext();

export const initialState = {
    posts: [],
    loading: false,
    error: null,
};

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);



    return (
        <AppContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error("useAppContext must be used within AppContext")
    }

    return context
}

// export default useAppContext
