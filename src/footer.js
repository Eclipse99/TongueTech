import React from 'react';
import './PPE.css';

const footer =()=>{
  return (
<div class="footer">
    <div class="footer-nav">
        <nav>
            <a> Qui sommes nous? </a>
            <a> Notre équipe </a>
            <a> Questions Fréquentes </a>
            <a> Nous contacter </a>
        </nav> 
    </div>
    <div class="footer-reseaux">
        <a href="http://scripteden.com/download/eden-ui/" target="_blank" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a>
        <a href="http://scripteden.com/download/eden-ui/" target="_blank" class="btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="http://scripteden.com/download/eden-ui/" target="_blank" class="btn-social btn-instagram"><i class="fa fa-instagram"></i></a>
    </div>
    <div class="footer-copyright">
        <p> 2021 - &copy; TongueTech</p>
    </div>
</div>
  );
}

export default footer;