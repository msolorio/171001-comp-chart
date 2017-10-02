import React from 'react';
import Headers from './Headers';
import Header from './Header';
import Slider from './Slider';
import Features from './Features';
import Feature from './Feature';
import './Chart.css';

export default function Chart(props) {
  return (
    <div className="Chart">
      <div className="recommendedSku">recommended sku: {
        props.recommendedSku
          ? props.recommendedSku
          : 'none'}
      </div>

      <Headers>
        <Header sku={512} recommendedSku={props.recommendedSku} />
        <Header sku={16} recommendedSku={props.recommendedSku} />
        <Header sku={8} recommendedSku={props.recommendedSku} />
        <Header sku={64} recommendedSku={props.recommendedSku} />
        <Header sku={9000} recommendedSku={props.recommendedSku} />
      </Headers>

      <Slider/>

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
