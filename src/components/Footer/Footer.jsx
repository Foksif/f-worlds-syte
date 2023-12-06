import React from 'react';
import './footer.css';
import Logo from './../../img/logo.png';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper mb-20 ">
          <div className='footer__block-one'>
            <div className='footer__block-title'>
              <img className='footer__logo' src={Logo} alt="" />
              <h6 className="footer__title">
                F-WORLDS
              </h6>
            </div>
            <div className='footer__block-title'>

              <h6 className="footer__sub-title">
                Проект игровых серверов Minecraft.
              </h6>

            </div>
            <div className='footer__block-title'>

              <h6 className="footer__sub-title">
                Верся сайта: 0.0.1 alfa
              </h6>
            </div>

          </div>
          <div className='footer__block-two'>
            <div className='social-icons'>
              <Link className='linck' to="https://discord.com/invite/C7gGFrCaXb"><i className='bx bxl-discord-alt'></i></Link>
              <Link to="https://vk.com/ffworlds"><i className='bx bxl-vk'></i></Link>
              <Link to="https://github.com/Foksif"><i className='bx bxl-github'></i></Link>
            </div>
          </div>
        </div>

        <div className="footer__line">
        </div>
        <div className="footer__wrapper">

          <div className="footer__wrapper">
            <p className="scroll-scale">Copyright &copy; 2023 by Foks_f || All rights reserved.</p>
            <a className="scroll-scale lincks" href="#home"><i className='bx bx-chevrons-up'></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;