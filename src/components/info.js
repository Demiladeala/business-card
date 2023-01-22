import React from 'react';
import image from '../images/ownerImage.jpg'
import emailImage from '../images/Icon.svg'

export default function Info(){
    return(
        <div>
            <a href ='https://github.com/Demiladeala'><img className='info-img' src={image} alt="owner" width="200px" height="200px"/></a>
            <div className='card-info'>
            <h2 className='card-name'>Oluwademilade Ala</h2>
            <h5 className='job'>Frontend Developer</h5>
            <h5 className='card-website'>oluwademiladeala.website</h5>
            <a className='email-button' href='mailto:demiladeala.gmail.com'>
                <img src={emailImage} alt='email'></img>Email</a>
            </div>
        </div>
    )
}
