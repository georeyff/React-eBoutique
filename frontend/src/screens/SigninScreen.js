import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        // TODO : signin action
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Connexion</h1>
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
                    <label />
                    <button className="primary" type="submit">
                        Connexion
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Nouveau client ? {' '}
                        <Link to='/register'>Créer votre compte</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
