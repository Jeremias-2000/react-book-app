import React from 'react'
import './RegisterStyles.css';
import '../../global.css'
import { FiMail,FiLock} from "react-icons/fi";


const Register = () => {
    return (
        <>
        
        <div className="container">
      
            <h1>Livraria</h1>
            <div className='container_login'>
                <h2> Cadastro</h2>

                <div className="input_login">
                


                    <div className="username_register">
                        
                        <input type="text" placeholder="Digite seu Nome de Usuário" />
                        <FiMail style={{position: 'relative', left: -50,top:6,fontSize: 18}}/>
                        </div>

                    <div className="email_login">
                        
                    <input type="text" placeholder="Digite seu Email" />
                    <FiMail style={{position: 'relative', left: -50,top:6,fontSize: 18}}/>
                    </div>
                    
                
                    <div className="password_login">
                    <input type="text" placeholder="Digite sua Senha" />
                    <FiLock style={{position: 'relative', left: -50,top:6,fontSize: 18}}/>
                    </div>
                    

                    <button className="button_login">Cadastrar</button>

                    
                </div>
                
            </div>
        </div>

        </>
    )
}

export default Register
