import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAction, setLoginAction } from '../reduxDucks/mainDuck';

export default function DuckComponent() {
    const { users, login, userData } = useSelector(state => state.main);

    useEffect(() => {
        console.log(users)
    }, [users])
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { email, password } = user;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsersAction());
    }, []);
    //funcion para manejar el evento al cambio
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    // funcion para Iniciar Sesión
    const handleSubmit = () => {
        if (email.trim().length && password.trim().length !== 0) {
            filterUser()
        } else {
            alert('No ha ingresado correo o password')
        }
    };
    const filterUser = () => {
        let filter_1 = users.filter(user => user.email === email);
        if (filter_1) {
            if (filter_1[0].username === password) {
                console.log('si es password');
                alert('Sesión Iniciada');
                console.log(filter_1[0].name)
                dispatch(setLoginAction(
                    true,
                    {
                        name: filter_1[0].name,
                        email: filter_1[0].email,
                        id: filter_1[0].id
                    }
                ));
                setUser({
                    email: '',
                    password: ''
                })
            } else {
                console.log('No es password')
            }
        }

    }
    return (
        <>
            {!login ?
                (
                    <>
                        <h1>Componente</h1>
                        <div>
                            <input
                                onChange={handleChange}
                                name='email' value={email}
                                type="email"
                                placeholder='Correo'
                            />
                        </div>
                        <div>
                            <input
                                onChange={handleChange}
                                name='password'
                                value={password}
                                type="password"
                                placeholder='Password'
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </>
                )
                :
                <div>
                    <h1>Bienvenido {userData.name}</h1>
                    <button
                        onClick={() => dispatch(setLoginAction(
                            false
                        ))}
                    >Cerrar Sesión
                    </button>
                </div>
            }
        </>
    )
}

