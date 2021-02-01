import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAdress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAdressScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { shippingAdress } = cart;
    if (!userInfo){ 
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAdress.fullName);
    const [adress, setAdress] = useState(shippingAdress.adress);
    const [city, setCity] = useState(shippingAdress.city);
    const [postalCode, setPostalCode] = useState(shippingAdress.postalCode);
    const [country, setCountry] = useState(shippingAdress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAdress({ fullName, adress, city, postalCode, country})
        );
        props.history.push('/payment');
    };
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Adresse de livraison</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Nom et Prénom</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        placeholder="Entrez votre nom et prénom"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="adress">Adresse</label>
                    <input 
                        type="text" 
                        id="adress" 
                        placeholder="Entrez votre adresse"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">Ville</label>
                    <input 
                        type="text" 
                        id="city" 
                        placeholder="Entrez votre ville"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Code Postal</label>
                    <input 
                        type="text" 
                        id="postalCode" 
                        placeholder="Entrez votre Code Postal"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country">Pays</label>
                    <input 
                        type="text" 
                        id="country" 
                        placeholder="Entrez votre pays"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">
                        Continuer
                    </button>
                </div>
            </form>
        </div>
    )
}
