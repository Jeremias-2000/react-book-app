import React from 'react';
import './HomeStyles.css';
import { FiSearch } from 'react-icons/fi';
import NavBar from '../../components/navbar';
const Home = () =>{
    return (
        <>
        <NavBar/>
        <div className = "HomeContainer">
            <div className="InputIcon">
                <input type="text" placeholder="Pesquisar"/>
                <FiSearch style={{position: 'relative', left: -50,top:6,fontSize: 18}}/>
            </div>
            
        </div>
        </>
    )
}

export default Home

