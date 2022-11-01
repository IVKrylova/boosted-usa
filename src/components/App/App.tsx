import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import CatalogScooters from '../CatalogScooters/CatalogScooters';
import MoreInfo from '../MoreInfo/MoreInfo';
import Profile from '../Profile/Profile';
import StoreCart from '../StoreCart/StoreCart';
import FaqList from '../FaqList/FaqList';
import CatalogAccessories from '../CatalogAccessories/CatalogAccessories';
import CatalogGiftCard from '../CatalogGiftCard/CatalogGiftCard';
import ItemScooter from '../ItemScooter/ItemScooter';
import ItemAccessory from '../ItemAccessory/ItemAccessory';
import ItemGiftCard from '../ItemGiftCard/ItemGiftCard';
import './App.scss';

const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/catalog'
          element={<CatalogScooters />}
        />
        <Route
          path='/catalog/:id'
          element={<ItemScooter />}
        />
        <Route
          path='/accessories'
          element={<CatalogAccessories />}
        />
        <Route
          path='/accessories/:id'
          element={<ItemAccessory />}
        />
        <Route
          path='/gift-card'
          element={<CatalogGiftCard />}
        />
        <Route
          path='/gift-card/:id'
          element={<ItemGiftCard />}
        />
        <Route
          path='/more-info'
          element={<MoreInfo />}
        />
        <Route
          path='/faq'
          element={<FaqList />} />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/store-cart'
          element={<StoreCart />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
