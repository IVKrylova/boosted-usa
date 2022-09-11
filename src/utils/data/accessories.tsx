import boostedBeldKit from '../../images/acc-boosted-beld-kit.png';
import boostedPulley from '../../images/acc-boosted-pulley.png';
import boostedRevStemCatch from '../../images/acc-boosted-rev-stem-catch.png';
import boostedSkidPlates from '../../images/acc-boosted-skid-plates.png';
import brearingServesKit from '../../images/acc-brearing-serves-kit.png';
import revTube from '../../images/acc-rev-tube.png';
import stompBrakeFender from '../../images/acc-stomp-brake-fender.png';

export const accessoriesList: {
  name: string,
  img: string,
  price: number,
  availability: boolean,
  otherPrice?: number,
  id: number,
}[] = [
  {
    name: 'Boosted Beld Kit',
    img: boostedBeldKit,
    price: 25.00,
    availability: true,
    id: 0,
  },
  {
    name: 'Boosted Pulley / Belt Upgrade Kit',
    img: boostedPulley,
    price: 75.00,
    availability: true,
    id: 1,
  },
  {
    name: 'Boosted Rev Stem Catch',
    img: boostedRevStemCatch,
    price: 19.00,
    availability: true,
    otherPrice: 29.00,
    id: 2,
  },
  {
    name: 'Boosted Skid Plates',
    img: boostedSkidPlates,
    price: 20.00,
    availability: true,
    id: 3,
  },
  {
    name: 'Brearing Serves Kit',
    img: brearingServesKit,
    price: 50.00,
    availability: true,
    id: 4,
  },
  {
    name: 'Rev Tube',
    img: revTube,
    price: 16.00,
    availability: true,
    otherPrice: 19.00,
    id: 5,
  },
  {
    name: 'Stomp Brake Fender',
    img: stompBrakeFender,
    price: 50.00,
    availability: false,
    id: 6,
  },
];
