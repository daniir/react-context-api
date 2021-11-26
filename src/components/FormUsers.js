import React from 'react';
import TestContext from '../context/TestContext';


//Data inicial del componente
const formData={
    id: null,
    name: "",
    age: ""
};

function FormUsers({updateUser, setUpdateUser}){

    //useRef()
    const inputNameRef = React.useRef();

    React.useEffect(() => {
        inputNameRef.current.focus();

        // Verificar edición
        updateUser ? setUser(updateUser) : setUser(formData)
    }, [updateUser]);

    /*************************************/

    //Destructuración de los elementos del contexto
    const { addUser, editUser } = React.useContext(TestContext);

    //Variables de estado del componente
    const [user, setUser] = React.useState(formData);
    //const [userEdit, setUserEdit] = React.useState();

    //Método del formulario
    const handleChange = e => {
        setUser({
            ...user,
            id: !user.id ? Date.now() : user.id,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!user.name.trim() || !user.age){
            alert("Favor de completar los campos del formulario");
            inputNameRef.current.focus();
            return;
        }

        if (updateUser === null) {
            addUser(user);
        } else { 
            editUser(user); 
        };
            
        //Reiniciar formulario
        inputNameRef.current.focus();
        setUser(formData);
        setUpdateUser(null);
    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>
                {
                    updateUser === null ? "Registrar nuevo Usuario" : "Modificar Usuario"
                }
            </h3>
            <input type="text" 
                name="name" 
                placeholder="Nombre del usuario"
                value={user.name}
                onChange={handleChange}
                ref={inputNameRef}/>
            <br/>
            <input type="number"
                max="100"
                name="age" 
                placeholder="Edad del usuario"
                value={user.age}
                onChange={handleChange}/>
            <hr/>
            <button type="submit">
                {
                    updateUser === null ? "Registrar" : "Modificar"
                }
            </button>
        </form>
    );
};

export default FormUsers;