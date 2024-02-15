import React from 'react'
import './styles/cardUser.css'

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {
  //  console.log(user)

  const handleDelete= ()=>{
    deleteUser('/users/', user.id);
  }

  //Esta es la funcion del setEditUser recibido para manejar el boton Edit
  const handleEdit= ()=>{
    setEditUser(user)
    setIsOpen(true)
  }
  return (
    <article className='article_user'>
      
        <h3>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='user_list'>
            <li><span className='subtitle_text'>Email: </span> <br /> <span className='user_text'>{user.email}</span></li>
            <li><span className='subtitle_text'>Birthday: </span> <br /> <span className='user_text'><ion-icon name="gift-outline"></ion-icon> {user.birthday}</span></li>
        </ul>
        <hr  />
        <div className='box_button'>
          <button className='delete_button' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
          <button className='edit_button' onClick={handleEdit}><ion-icon name="pencil-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CardUser