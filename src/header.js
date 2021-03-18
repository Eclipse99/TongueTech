import React from 'react';
import './PPE.css';
import {Link} from 'react-router-dom';

const header =()=>{
  return (
    <nav class="head">
        <div class="logo">
            <table >
                <tr><td><img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/161235913_237567794751662_837792379626583009_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=cTB5pqwL5_wAX9U-qCv&_nc_ht=scontent-cdt1-1.xx&oh=df9c1d9e3eb24591643531b5c234f22c&oe=6074CF68" alt='logo' width='60px'/></td>
                <td><h3>TongueTech</h3></td></tr>
            </table>
        </div>
        
        <div class="menu">
        <ul >
          <Link to='/about'>
            <li>A propos</li>
          </Link>
          <Link to='/profil'>
            <li>Profil</li>
          </Link>  
          <li>Patient</li>
            <li class="droite" >Se déconnecter</li>
        </ul>
        </div>
    </nav>
  );
}

export default header;