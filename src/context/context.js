import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
export const ExpenseContext = createContext(initialState);

export const Provider = ({ children }) => {
    // useReducer: complex version of useState() - used to maintain and update global state
    // transactions is state and dispatch used to pass action and state to "contextReducer" function
    const [ transactions, dispatch ] = useReducer(contextReducer, initialState);

    //Action Creators - dispatch the actions with type and payload (payload is some data passed)
    const deleteTransaction = (id) => dispatch({ type: "DELETE_TRANSACTION", payload: id });
    const addTransaction = (transaction) => dispatch({ type: "ADD_TRANSACTION", payload: transaction });

    let balance = 0;
    transactions.forEach(t => {
        if(t.type === 'Income')
            balance += t.amount;
        else
            balance -= t.amount;
    });

    return (
        <ExpenseContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseContext.Provider>
    );
}

