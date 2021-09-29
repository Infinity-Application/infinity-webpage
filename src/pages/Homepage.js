import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import heroImage from './CryptoImage1.jpg'

export default function Homepage() {
    return (
        <div>
            <div>
                <h1>#1 Crypto App in the middle east</h1>
                <h1>*Launch App*</h1>
                
            </div>
            <div>
                <img src={heroImage} alt="Logo" style={{width:500}} />
            </div>
        </div>
    )
}
