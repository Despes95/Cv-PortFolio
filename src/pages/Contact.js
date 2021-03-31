import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard'

const contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Toulouse</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0607660779">
                <span className="clickInput" onClick={() => {
                  alert('Téléphone copié!'
                  )
                }}>
                  06 07 66 07 79
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="nicolas.pires@gmail.com">
                <span className="clickInput" onClick={() => {
                  alert('Email copié!'
                  )
                }}>
                  nicolas.pires@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/nicolas-pires-a08aa120a/" target="_blank"
            rel="noopener noreferrer">
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Despes95" target="_blank"
            rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;