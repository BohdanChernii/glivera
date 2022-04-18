import React from 'react';
import './homepage.scss';
import logo from './images/logo.svg';
import search from './images/search.svg';
import clock from './images/clock.svg';
const HomePage = () => {
  return (
    <div className="sushiStore">
      <header className="sushiStore__header header">
        <img src={logo} alt="" className="header__logo" />
        <div className="header__contacts contacts">
          <h4 className="contacts__title">Наш телефон</h4>
          <p className="contacts__number">+380996510938</p>
          <p className="contacts__number">+380996510938</p>
        </div>
        <div className="header__schedule schedule">
          <img src={clock} alt="" className="schedule__clock" />
          <p className="schedule__text">работаем с 10:00 до 00:00</p>
        </div>
        <img src={search} alt="" className="header__search" />
      </header>
      <main className="sushiStore__main">
        <div className="sushiStore__main-product product">
          <h3 className="product__title">Пицца</h3>
        </div>
        <div className="sushiStore__main-product  product  product__sets">
          <h3 className="product__title">Сеты</h3>
        </div>
        <div className="sushiStore__main-product product product__wok">
          <h3 className="product__title">WOK</h3>
        </div>
        <div className="sushiStore__main-product product">
          <h3 className="product__title">Роллы</h3>
        </div>
        <div className="sushiStore__main-product product__combo product ">
          <h3 className="product__title">Комбо</h3>
        </div>
      </main>
      <footer className="sushiStore__footer footer"></footer>
    </div>
  );
};
export default HomePage;
