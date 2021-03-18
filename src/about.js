import React from 'react';
import './PPE.css';
import Header from './header.js';
import Footer from './footer.js';

const about =()=>{
  return (
      <div class="about">
        <div class="team">
            <span class="gauche">
            <h3>Qui sommes nous ?</h3>
            <p>Nous sommes une équipe de 5 étudiants en école 
            d'ingénieurs et nous développons un système de commande 
            buccale afin de permettre aux personnes sujettes
             au handicap de retrouver de l'autonomie.</p>
            </span>
            <br></br>
            <span>
                <h4>Vidéo explicative</h4>
            </span>
            <br></br>
            <span>
             <h3>L'équipe de tongueTech</h3>
             <table>
                 <tr>
                     <td>
                        <img src='logo.png'/>
                     </td>
                     <td>
                        <p>Noémie Pasquier</p>
                     </td>
                     <td>
                        <img src='logo.png'/>
                     </td>
                     <td>
                        <p>Axel Poirot</p>
                     </td>
                     <td>
                        <img src='logo.png'/>
                     </td>
                     <td>
                        <p>Célia Bocher</p>
                     </td>

                 </tr>
                 <tr>
                     <td>
                        <img src='./large.jpg' alt="jakob"/>
                     </td>
                     <td>
                        <p>Jakob Zahler</p>
                     </td>
                     <td>
                        <img src='logo.png'/>
                     </td>
                     <td>
                        <p>Margot Calvié</p>
                     </td>
                     <td>
                        <img src='logo.png'/>
                     </td>
                     <td>
                        <p>Paul Nantier</p>
                     </td>

                 </tr>
             </table>
             </span>

        </div>
        
        <div class="contact">
            <h3>Nous contacter</h3>
            <p>e-mail : techtongue@gmail.com</p>
            <p>n° : 06 ** ** ** **</p>
            <p>Adresse : 37, Quai de Grenelle,<br></br>
             75017 Paris<br></br>
             FRANCE</p>

             <form>
                 <label>Email : </label>
                 <input type="email" id="email"/>
                 <br></br>
                 <label>Objet : </label>
                 <input type="text" id="text"/><br></br>
                 <label>Message : </label><br></br>
                 <input class="msg" type="text" id="text" />
             </form>
        </div>
        <br></br>
        <footer><Footer /></footer>
      </div>
  );
}
export default about;
