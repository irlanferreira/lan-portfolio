import React from "react";
import '../styles/navbar.css'
import instagramImg from '../assets/images/icons/instagram.png'

export default function NavBar () {
    return (
        <header>
            <ul>
                <li onClick=''>Home</li>
                <li onClick=''>Skills</li>
                <li onClick=''>Projetos</li>
                <li onClick=''>Contatos</li>
                <li><a href=""><img src={instagramImg} alt="" /></a></li>
                <li></li>
            </ul>
        </header>
    );
}