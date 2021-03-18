// import './profil.js'
// const express = require('express');
// const app = express();
// const port = 3000;
// const mysql = require('sync-mysql');
// const bodyParser = require("body-parser");

// const router = express.Router();


// const db = new mysql({

//     host: 'localhost',
//     user: 'root', 
//     password : '',    
//     port: 3306,
//     database : "tpwebservices"
// });










// app.listen(port, () => {
//     console.log("OK");
// });

// app.use(bodyParser.json());

// app.get('/users', (req, res)=> {
//     const result = db.query("SELECT * FROM `user` ");
//     res.send(result);
// });


// const loadUser= ()=>{
//      // récupération du template
//      var template = $('#template').html();
 
//      // optionnel, accélère les utilisations futures
//      Mustache.parse(template);
      
//      // objet javascript contenant les données à afficher
//      var data = {
//          home: "Accueil",
//          name: "Roger"
//      };
  
//      // génération du HTML
//      var rendered = Mustache.render(template, data);
  
//      // Insertion du résultat dans la page HTML
//      $('#target').html(rendered);
// }


// app.get('/users/:id', (req, res)=> {
//     const id = req.params.id;

//     const result= db.query(`SELECT * FROM user WHERE id=${id}`);
//     if(result.length==0){
//         res.status(404).send("NOT FOUND");}
//     else{
//         res.send(result[0]);
//     }
//     const utilisateur ={
//         name : req.result.nom,
//         surname :req.result.prenom,
//         age : req.result.age
//     }
// });

// app.post(`/users`, (req, res, next) => {

//    const ajouter = db.query(`INSERT INTO user VALUES (NULL, '${req.body.nom}', '${req.body.prenom}', '${req.body.age}') `);
   
//    res.send(ajouter);
//  });


// // app.put(`/users/:id`, (req, res, next) => {

// //     const id = req.params.id;

// //     if(req.body.nom && req.body.prenom && req.body.age)
// //     {
// //         const result= db.query(`UPDATE user SET nom='${req.body.nom}', prenom='${req.body.prenom}', age='${req.body.age}' WHERE id=${id} `);
// //         res.send(result);
// //     }
// //     else if (req.body.nom && req.body.prenom)
// //     {
// //         const result= db.query(`UPDATE user SET nom='${req.body.nom}', prenom='${req.body.prenom}' WHERE id=${id} `);
// //         res.send(result);
// //     }
// //     else if(req.body.prenom && req.body.age)
// //     {
// //         const result= db.query(`UPDATE user SET  prenom='${req.body.prenom}', age='${req.body.age}' WHERE id=${id} `);
// //         res.send(result);
// //     }
// //     else if(req.body.nom && req.body.age)
// //     {
// //         const result= db.query(`UPDATE user SET nom='${req.body.nom}',  age='${req.body.age}' WHERE id=${id} `);
// //         res.send(result);
// //     }
// //     else if(req.body.nom)
// //     {
// //         const result= db.query(`UPDATE user SET nom='${req.body.nom}' WHERE id=${id} `);
// //         res.send(result);
// //     }
// //     else if(req.body.prenom)
// //     {
// //         const result= db.query(`UPDATE user SET prenom='${req.body.prenom}' WHERE id=${id} `);
// //         res.send(result);
// //     }
// //     else if(req.body.age)
// //     {
// //          const result= db.query(`UPDATE user SET age='${req.body.age}' WHERE id=${id} `);
// //          res.send(result);
// //     }
// //     else {res.send("RIEN A MODIFIER");}
// //  });

//  app.put(`/users/:id`, (req, res, next) => {

//     const id = req.params.id;
//     let nom = req.body.nom;
//     let prenom = req.body.prenom;
//     let age = req.body.age;

//     const user= db.query(`SELECT * FROM user WHERE id=${id}`);

//     if(!nom){
//         nom = user[0].nom;
//     }
//     if(!prenom){
//         prenom = user[0].prenom;
//     }
//     if(!age){
//         age = user[0].age;
//     }

//     const result= db.query(`UPDATE user SET nom='${nom}', prenom='${prenom}', age='${age}' WHERE id=${id}`);
//     res.send(result);





    

//  });
 
//  app.delete(`/users/:id`, (req, res, next) => {
//     const id = req.params.id;

//     const result= db.query(`DELETE FROM user WHERE user.id=${id}`);
//     res.send(result);

//  });