import React from 'react';

import TestContext from '../context/TestContext';

function TableUsersData({setUpdateUser}){

    const { users, deleteUser } = React.useContext(TestContext);

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((el, index) => (
                        <tr key={index}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.age}</td>
                            <td>
                                <button 
                                    style={{margin: "3px"}}
                                    onClick={() => setUpdateUser(el)}
                                    >
                                        Editar
                                </button>
                                <button 
                                    style={{margin: "3px"}}
                                    onClick={() => deleteUser(el.id)}
                                    >
                                        Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default TableUsersData;