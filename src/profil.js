import React from 'react';
import './PPE.css';
import './users';
import Header from './header.js';
import Footer from './footer.js';

const Profil =()=>{
  return (
    <div>
        <div className="profil">
        {/* <script id="template" type="x-tmpl-mustache"> */}
            <div class="info">
                <h3>INFORMATIONS DE COMPTE</h3>
                <hr></hr>
                <table>
                    <tr>
                        <td> email : </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td>mdp : </td>
                        <td>  </td>
                    </tr>
        
                </table>
            </div>
            <div class="info">
                <h3>INFORMATIONS PERSONELLES</h3>
                <hr></hr>
                <table>
                    <tr>
                        <td> Nom : </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> Prénom : </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> Adresse : </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> Code Postal : </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> Ville :</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> Pays : </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> e-mail :</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> n°tel : </td>
                        <td>  </td>
                    </tr>
                </table>
            </div>
            <div class="info">
            <h3>INFORMATIONS PROFESSIONNELLES</h3>
            <hr></hr>

                <table>

                    <tr>
                        <td> N° d'ordre : </td>
                        <td>  </td>
                    </tr>
                    <tr>
                        <td> Métier : </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>  Etablissement de travail : </td>
                        <td> </td>
                    </tr>
                </table>
            </div>
            {/* </script> */}
        </div>
        <footer><Footer /></footer>
    </div>
  );
}

export default Profil;