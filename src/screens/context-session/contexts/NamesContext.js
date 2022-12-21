import { View, Text } from 'react-native'
import React, { useReducer } from 'react'

const NamesContext = React.createContext()

const reducer = (state, action) => {
    /// state - [sarath, kiran]
    ///action - {
        // type: string - command
        //payload:
    // }

    switch (action.type) {
        case 'add_name':
            return [...state,action.payload]
        case 'remove_name':
            return state.filter((item) => item !== action.payload)
        default:
            state
    }
}

export const NamesProvider = ({children})=> {
    const [names, dispatch] = useReducer(reducer, [])

    //define actions
    const addNames = (newName)=> {
        dispatch({type:'add_name', payload: newName})
    }

    const removeNames = (newName) => {
        dispatch({type:'remove_name', payload: 8})
    }
    return <NamesContext.Provider value={{names, addNames, removeNames}}>
        {children}
    </NamesContext.Provider>
}

export default NamesContext