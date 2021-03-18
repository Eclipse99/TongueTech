import React from 'react';

const Questionsfreq = () => {
return ( 
        <div className="Questionsfreq">
            <div className="choixcategorie">
                <div className = "titrechoixcat">
                    <h1 > Choississez une categorie : </h1>
                </div>
                <div className="selectcat">
                    <select className="optionselect">
                        <option>  Categories </option>
                        <option> Produit </option>
                        <option> Compte </option>
                        <option> Technologies </option>
                    </select>
                </div>
            </div> 
            <h1 className = "titrecat"> NOM DE LA CATEGORIES CHOISIS </h1>
            <div className="categorie">
            <ul>
                <li><p className="question"> Comment modifier mes informations personelles ? </p></li>
                <p className="reponse"> Pour modifiez vos informations, rendez vous dans l'onglet "Profil", dans la categorie "Informations Personelles" et cloquez sur "modifier mes informations" en bas à droite de cette categorie </p>
                <li><p className="question"> Comment ajouter une deuxieme adresse mail ? </p></li>
            </ul>
                              
            
            </div>
            
        </div>
    );
};

export default Questionsfreq;