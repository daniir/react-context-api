import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListUsers from './components/ListUsers';
import FormUsers from './components/FormUsers';

function App() {

  //Editar Usuario, envió entre componentes List => Form
  const [updateUser, setUpdateUser] = React.useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>----------------------------------------------</p>
        <ListUsers
          setUpdateUser={setUpdateUser}
        />
        <p>----------------------------------------------</p>
        <FormUsers
          updateUser={updateUser}
          setUpdateUser={setUpdateUser}
        />
      </header>
    </div>
  );
}

export default App;
