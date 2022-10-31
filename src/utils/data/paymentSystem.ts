import amex from '../../images/footer-logo-amex.svg';
import dinersClub from '../../images/footer-logo-diners.svg';
import googlePay from '../../images/footer-logo-google-pay.svg';
import klarna from '../../images/footer-logo-klarna.svg';
import masterCard from '../../images/footer-logo-master-card.svg';
import dPay from '../../images/footer-logo-pay.svg';
import vPay from '../../images/footer-logo-v.svg';
import visa from '../../images/footer-logo-visa.svg';

export const paymentSystems: {
  name: string;
  img: string;
  id: number;
}[] = [
  {
    name: 'logo payment system Amex',
    img: amex,
    id: 1,
  },
  {
    name: 'logo payment system Diners Club',
    img: dinersClub,
    id: 2,
  },
  {
    name: 'logo payment system Google Pay',
    img: googlePay,
    id: 3,
  },
  {
    name: 'logo payment system Klarna',
    img: klarna,
    id: 4,
  },
  {
    name: 'logo payment system MasterCard',
    img: masterCard,
    id: 5,
  },
  {
    name: 'logo payment system D Pay',
    img: dPay,
    id: 6,
  },
  {
    name: 'logo payment system V Pay',
    img: vPay,
    id: 7,
  },
  {
    name: 'logo payment system Visa',
    img: visa,
    id: 8,
  },
]
