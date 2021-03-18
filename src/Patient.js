import React from 'react';

const Patient = (props) => {
return ( 
        <div className="Choixpatient"> 
            <h1 className="Titrechoixpatient"> Choississez un patient </h1>
            <table  className="Table">
                <thead className="Tablechoixpatient">
                    <tr>
                        <th> Nom </th>
                        <th> Prenom </th>
                        <th> Date de naissance </th>
                        <th> Lieu de residence </th>
                    </tr>
                </thead>
                <tbody className="Tablechoixpatient">
                    {
                        props.data.map(row => (
                           <tr>
                               <td> { row.nom } </td>
                               <td> { row.prenom } </td>
                               <td> { row.date } </td>
                               <td> { row.adresse } </td>
                           </tr> 
                        ))
                    }
                </tbody>
                <button className="Buttonchoix" > Selectionner ce patient  </button> 
                <button className="Buttonchoix"> Ajouter un nouveau patient  </button> 
                <button className="Buttonchoix"> Supprimer ce patient  </button> 
            </table>

        </div>
    );
};

export default Patient;