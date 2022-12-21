import React, { useReducer } from "react";  

const NameContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_name':
            return [...state,action.payload]
        case 'remove_name':
            console.log("payload: ", action.payload);
            let array = state.filter(name => name !== action.payload)
            console.log("array",array);
            return array
        default:
            return state
    }
}

export const NameProvider = ({children})=> {
    const [names, dispatch] = useReducer(reducer, [])

    const addName = (newName) => {
       dispatch({type: 'add_name', payload: newName}) 
    }
    const removeName = (nameToRemove) => {
        console.log("nameToRemove: ",nameToRemove);
        dispatch({type: 'remove_name', payload: nameToRemove})
    }
    return <NameContext.Provider value={{names, addName, removeName}}>
        {children}
    </NameContext.Provider>
}

export default NameContext