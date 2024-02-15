import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css';


const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {
    
    

    //Dentro de la libreria  react-hook-form tenemos un hook llamado useForm que nos retorna un objeto que tiene varias propiedades como handleSubmit, register, reset
    const {handleSubmit, register, reset}=useForm();

    //console.log(editUser)

    //Aquí usamos este useEfect para enviar los datos al formulario
    useEffect(() => {
      reset(editUser);
    }, [editUser]);
    

    //Funcion para manejar el boton
    const submit= (data)=>{

        if(editUser){
            updateUser('/users', editUser.id, data);
            setEditUser();
        }else{
            createUser('/users', data);
        }

        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''
        })
        setIsOpen(false)
        }

        //Funcion para el manejo del botón close
        const handleClose = ()=>{
            setIsOpen(false) 
    }

  return (

    //La clase 'able' sirve para que aparezca y desaparezca el boton junto con el estado y las funciones
    <div className={`form_background ${isOpen&&'able'}`}>
        <form className='form_container' onSubmit={handleSubmit(submit)} >
            <div className='form_close' onClick={handleClose}>
            <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <h2 className='form_title'>Nuevo Usuario</h2>
            
            <div className='form_item'>
                <label htmlFor="email">Email</label> <br />
                <input {...register('email')} id='email' type="email" />
                <br />
            </div>
            <div className='form_item'>
                <label htmlFor="password">Password</label> <br />
                <input {...register('password')} id='password' type="password" />
                <br />
            </div>
            <div className='form_item'>
                <label htmlFor="first_name">First Name</label> <br />
                <input {...register('first_name')} id='first_name' type="text" />
                <br />
            </div>
            <div className='form_item'>
                <label htmlFor="last_name">Last Name</label> <br />
                <input {...register('last_name')} id='last_name' type="text" />
                <br />
            </div>

            <div className='form_item'>
                <label htmlFor="birthday">Birthday</label> <br />
                <input {...register('birthday')} id='birthday' type="date" />
                <br />
            </div>
            
            <button className='form_btn'>Submit</button>
        </form>
    </div>
  )
}

export default FormUser