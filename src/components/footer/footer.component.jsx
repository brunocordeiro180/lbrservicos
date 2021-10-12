import React from 'react';
import './footer.styles.scss';
import { SiWhatsapp, SiInstagram, SiFacebook } from 'react-icons/si';


const Footer = () => {
    
    return (
        <div className= "footer">
            GRUPO IBR SERVIÇOS 2021
            <br/> Todos os direitos reservados

            <div className= "flex_container">
               <a href= "http://api.whatsapp.com/send?phone=553186080363" className= "flex_container__icon whatsapp">  <SiWhatsapp size={40}/> </a>
               <a href= "https://instagram.com/grupolbrservicos?utm_medium=copy_link" className= "flex_container__icon instagram"> <SiInstagram size= {40}/> </a>
               <a href= "https://instagram.com/grupolbrservicos?utm_medium=copy_link" className= "flex_container__icon facebook"> <SiFacebook size= {40}/> </a>
            </div>

        </div>


        
    )

}

export default Footer;

