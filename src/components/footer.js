import React from 'react';
import twitter from '../images/Twitter Icon.png'
import facebook from '../images/Facebook Icon.png'
import instagram from '../images/Instagram Icon.png'
import linkedln from '../images/Linkedln.png'
import Github from '../images/GitHub.svg'

export default function Footer(){
    return(
        <footer>
            <div className='footer-container'>
            <a className='twitter' href='https://twitter.com/AlaDemjosh?t=rTv0TQP-1OfIq86R0U4aWQ&s=09'><img src={twitter} alt='twitter icon'/> </a>
            <a className='facebook' href='https://www.facebook.com/demilade.ala.7'><img src={facebook} alt='facebook icon'/> </a>
            <a className='instagram' href='https://instagram.com/ala_demjosh?igshid=YmMyMTA2M2Y='><img src={instagram} alt='instagram icon'/> </a>
            <a className='linkedln' href='https://www.linkedin.com/in/demilade-ala-010715239'><img src={linkedln} alt='linkedln icon'/> </a>
            <a className='github' href='https://github.com/Demiladeala'><img src={Github} alt='github icon'/></a>
            </div>
        </footer>
    )
}