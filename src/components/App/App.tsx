import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import CatalogScooters from '../CatalogScooters/CatalogScooters';
import MoreInfo from '../MoreInfo/MoreInfo';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
import FaqList from '../FaqList/FaqList';
import CatalogAccessories from '../CatalogAccessories/CatalogAccessories';
import CatalogGiftCard from '../CatalogGiftCard/CatalogGiftCard';
import SoloItem from '../SoloItem/SoloItem';
import { Item } from '../../types/types';
import './App.scss';


const App: FC = () => {
  const { cart } = useTypeSelector(state => state.cart);
  const { addToCart, deleteFromCart, changeItem, getCartFromStorage } = useActions();
  const [isItemAdded, setIsItemAdded] = useState<boolean>(false);
  const [isItemDeleted, setIsItemDeleted] = useState<boolean>(false);
  const [amountCart, setAmountCart] = useState<number>(0);

  const handleClickAddToCart = (item: Item) => {
    addToCart(item);
    setIsItemAdded(true);
  }

  const handleClickDeleteFromCart = (id: number) => {
    deleteFromCart(id);
    setIsItemDeleted(true);
  }

  const handleClickPlus = (id: number, count: number) => {
    changeItem(id, count);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const handleClickMinus = (id: number, count: number) => {
    changeItem(id, count);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  useEffect(() => {
    if (isItemAdded) {
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsItemAdded(false);
    }
  }, [isItemAdded]);

  useEffect(() => {
    if (isItemDeleted) {
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsItemDeleted(false);
    }
  }, [isItemDeleted]);

  useEffect(() => {
    if (localStorage.cart) getCartFromStorage(JSON.parse(localStorage.cart));
  }, []);

  useEffect(() => {
    setAmountCart(cart.length);
  }, [cart]);

  return (
    <div className='app'>
      <Header
        amountCart={amountCart}
      />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/catalog'
          element={
            <CatalogScooters
              onClickButton={handleClickAddToCart}
            />
          }
        />
        <Route
          path='/catalog/:id'
          element={
            <SoloItem
              type='catalog'
              onClickButton={handleClickAddToCart}
            />
          }
        />
        <Route
          path='/accessories'
          element={
            <CatalogAccessories
              onClickButton={handleClickAddToCart}
            />
          }
        />
        <Route
          path='/accessories/:id'
          element={
            <SoloItem
              type='catalogAccessories'
              onClickButton={handleClickAddToCart}
            />
          }
        />
        <Route
          path='/gift-card'
          element={
            <CatalogGiftCard
              onClickButton={handleClickAddToCart}
            />
          }
        />
        <Route
          path='/gift-card/:id'
          element={
            <SoloItem
              type='giftCard'
              onClickButton={handleClickAddToCart}
            />}
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
          path='/cart'
          element={
            <Cart
              onClickDeleteFromCart={handleClickDeleteFromCart}
              onClickPlus={handleClickPlus}
              onClickMinus={handleClickMinus}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
