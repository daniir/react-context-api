import React from 'react';
import TestContext from '../context/TestContext';
import TableUsersData from './TableDataUsers';

function ListUsers({setUpdateUser}){

    const { users } = React.useContext(TestContext);

    return(
        <>
            {
                users.length > 0 ? 
                (
                    <TableUsersData
                        setUpdateUser={setUpdateUser}
                    />
                ) : 
                (
                    <h3>La lista de usuarios esta vacia</h3>
                )
            }
        </>
    );
};

export default ListUsers;