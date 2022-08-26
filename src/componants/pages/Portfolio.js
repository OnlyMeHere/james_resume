import React from 'react';

export default function Portfolio() {
  return (
  <div className='containor text-center'>
    <div className='row'>
      <div className='col align-self-center'>
        <h2>Portfolio</h2>
      </div>
    </div>
    <div className='row'>
      <div className='col align-self-start'>
        <a href='https://pbarkley.github.io/Helping-Hand/'> Helping Hand </a><p> a charity referal site </p>
      </div>
    </div>
    <div className='row'>
      <div className='col align-self-center'>
        <a href='https://james-bus-system.herokuapp.com/'> City Bus System </a><p> a urban bus route builder </p>
      </div>
    </div>
    <div className='row'>
      <div className='col align-self-end'>
        <a href='https://onlymehere.github.io/weather-travel-app/'> Travel Weather </a><p>find weather data from a city of your choice</p>
      </div>
    </div>

    <div className='container text-center'>
      <div className='row'>
        <div className='col align-self-start'>
          <h3> Blog Post's </h3>
        </div>
      </div>
      <div className='row'>
        <div className='col align-self-center'>
          <a href='https://medium.com/@bennett45.j.m/http-947f62cbe64d'> HTTP </a>
        </div>
      </div>
      <div className='row'>
        <div className='col align-self-center'>
          <a href='https://medium.com/@bennett45.j.m/cloud-computing-82b192e96363'> Cloud Computing </a>
        </div>
      </div>
    </div>
  </div>
  );
};
