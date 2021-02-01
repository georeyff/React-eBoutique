import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search 
        ? props.location.search.split('=')[1] 
        : '/';
    
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Les mots de passe ne sont pas identiques')
        } else {
            dispatch(register(name, email, password));
        }
    };
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Créer un compte</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Nom</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Nom" 
                        required 
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Adresse Mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Mot de passe" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmation Mot de passe</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Confirmation Mot de passe" 
                        required 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        S'enregistrer
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Déjà un compte ? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>
                            Se connecter
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
