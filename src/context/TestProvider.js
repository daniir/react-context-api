import React from 'react';

import TestContext from './TestContext';
import TestReducer from '../reducer/reducerTest/TestReducer';
import { initialData } from '../reducer/reducerTypes/types';

function TestProvider(props){
    
    const [state, dispatch] = React.useReducer(TestReducer, initialData);

    const addUser = (payload) => {
        dispatch({
            type: "NEW_USER",
            payload,
        });
    };

    const editUser = (payload) => {
        dispatch({
            type: "EDIT_USER",
            payload,
        });
    };

    //payload = Recibe como parámetro el Id del objeto
    const deleteUser = (payload) => {
        dispatch({
            type: "DELETE_USER",
            payload,
        });
    };
    
    return(
        <div>
            <TestContext.Provider
                value={{
                    users: state.users,
                    addUser,
                    editUser,
                    deleteUser
                }}
            >
                {props.children}
            </TestContext.Provider>
        </div>
    )
};

export default TestProvider;