import React from 'react'
import './SignInStyles.css';
import '../../global.css'
import { FiMail,FiLock, FiLogIn} from "react-icons/fi";
import {Link} from 'react-router-dom';
import NavBar from '../../components/navbar';
const Home = () => {
    return (
        <>
        
        <div className="container">
            <NavBar/>
            <h1>Livraria</h1>
            <div className='container_login'>
                <h2> Login</h2>

                <div className="input_login">
                
                    <div className="email_login">
                        
                    <input type="text" placeholder="Digite seu Email" />
                    <FiMail style={{position: 'relative', left: -50,top:6,fontSize: 18}}/>
                    </div>
                    
                
                    <div className="password_login">
                    <input type="text" placeholder="Digite sua Senha" />
                    <FiLock style={{position: 'relative', left: -50,top:6,fontSize: 18}}/>
                    </div>
                    

                    <button className="button_login">Login</button>

                    <Link className='black-link' to='/register'>
                        <FiLogIn size= {16} color= "#ed5757"/>
                         Ainda não possui conta ?
                    </Link>
                </div>
                
            </div>
        </div>

        </>
    )
}

export default Home
