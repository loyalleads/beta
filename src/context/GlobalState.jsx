import React, {createContext,useReducer} from 'react';

// Initial state
const initialState = {
    transactions:   [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

// Create context
export const GloabalContext = createContext(initialState);

// Provider componenet

export const GloabalProvider = ({ children }) => {
    const[state,dispatch] = useReducer(AppReducer, initialState);
    return (<GloabalContext.Provider>
            {children}
            <GloabalContext.Provider/>
            )
}
