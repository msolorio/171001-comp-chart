import React from 'react';
import Headers from './Headers';
import Header from './Header';
import Features from './Features';
import Feature from './Feature';

export default function Chart(props) {
  return (
    <div className="Chart">
      recommendedSku: {props.recommendedSku}

      <Headers>
        <Header/>
        <Header/>
        <Header/>
        <Header/>
        <Header/>
      </Headers>

      <Features>
        <Feature/>
        <Feature/>
        <Feature/>
        <Feature/>
        <Feature/>
      </Features>
    </div>
  );
};
