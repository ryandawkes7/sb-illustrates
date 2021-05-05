import React from 'react';
import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';
import { Portfolio } from '../components/home/Portfolio';

export const Home = (props) => {
  const hh = props.hh;
  const fh = props.fh;
  const wh = window.innerHeight;

  const myArr = [...document.getElementsByName('section')];
  myArr.forEach((e) => {
    if (e.id === 'portfolio-home') e.style.minHeight = `${wh - hh}px`;
    if (e.id === 'about') e.style.minHeight = `${wh}px`;
    if (e.id === 'contact') e.style.minHeight = `${wh - fh}`;
  });

  return (
    <div id="home-container">
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};
