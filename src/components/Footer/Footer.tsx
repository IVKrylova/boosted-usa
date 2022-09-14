import React from 'react';
import styles from './Footer.module.scss';
import amex from '../../images/footer-logo-amex.svg';
import dinersClub from '../../images/footer-logo-diners.svg';
import googlePay from '../../images/footer-logo-google-pay.svg';
import klarna from '../../images/footer-logo-klarna.svg';
import masterCard from '../../images/footer-logo-master-card.svg';
import dPay from '../../images/footer-logo-pay.svg';
import vPay from '../../images/footer-logo-v.svg';
import visa from '../../images/footer-logo-visa.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        <span className={styles.footer__copyright}>&copy;{new Date().getFullYear()} </span>
        <a className={styles.footer__link}>Boosted USA</a>
        . All Rights Reserved.
        <a className={styles.footer__link}>Terms of Service</a>
        . Built by
        <a className={styles.footer__link}>BH</a>
      </p>
      <ul className={styles.footer__paymentSystems}>
        <li>
          <img src={amex} alt="logo payment system Amex" className={styles.footer__paymentSystem} />
        </li>
        <li>
          <img src={dinersClub} alt="logo payment system Diners Club" className={styles.footer__paymentSystem} />
        </li>
        <li>
          <img src={googlePay} alt="logo payment system Google Pay" className={styles.footer__paymentSystem} />
        </li>
        <li>
          <img src={klarna} alt="logo payment system Klarna" className={styles.footer__paymentSystem} />
        </li>
        <li>
          <img src={masterCard} alt="logo payment system MasterCard" className={styles.footer__paymentSystem} />
        </li>
        <li>
          <img src={dPay} alt="logo payment system D Pay" className={styles.footer__paymentSystem} />
        </li>
        <li>
          <img src={vPay} alt="logo payment system V Pay" className={styles.footer__paymentSystem} />
        </li>
        <li>
          <img src={visa} alt="logo payment system Visa" className={styles.footer__paymentSystem} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
