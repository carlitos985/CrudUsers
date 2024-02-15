
import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './assets/hooks/useCrud'
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {

  //Creamos este seter para hacer el update y le envio es seter  por props a cardUser y el setUser se lo envio al formulario para que muestre la informacion
  const [editUser, setEditUser] = useState();

  //Estado para el manejo del boton close
  const [isOpen, setIsOpen] = useState (false)

  const url= 'https://users-crud.academlo.tech/';


  //Recibimos el retorno del useCrud con nombres acorde a la Api que estamos consultando
  const [users, getUsers, createUser, deleteUser, updateUser]=useCrud(url);

  useEffect(() => {
    getUsers('/users/')
  }, [])
    //console.log(users)

    //Funcion para abrir boton
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
  

  return (
    <div className='frame_form'>
      <h2>Usuarios</h2>
      <div className='create_button'>
      <button className='create' onClick={handleOpen}>Crear Nuevo Usuario</button>
      </div>
      <FormUser 
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='frame_card'>
        {
          users?.map(user =>(
            <CardUser
              user={user}
              key={user.id}
              deleteUser={deleteUser}
              setEditUser={setEditUser}
              /*Este seter lo paso a CardUser que es donde está el boton de editar para que aparezca el formulario al oprimir editar*/
              setIsOpen={setIsOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
