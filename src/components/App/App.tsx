import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import MoreInfo from '../MoreInfo/MoreInfo';
import Profile from '../Profile/Profile';
import StoreCart from '../StoreCart/StoreCart';
import FaqContainer from '../../containers/FaqContainer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/faq" element={<FaqContainer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/store-cart" element={<StoreCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
