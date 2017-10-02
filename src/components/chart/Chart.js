import React from 'react';
import Headers from './Headers';
import Header from './Header';
import Slider from './Slider';
import Features from './Features';
import Feature from './Feature';
import config from './config';
import './Chart.css';

export default function Chart(props) {

  return (
    <div className="Chart">
      <div className="recommendedSku">recommended sku:&nbsp;
        {
          props.recommendedSku
          ? props.recommendedSku
          : 'none'
        }
      </div>

      <Headers>
        <Header {...config.products[0]} recommendedSku={props.recommendedSku} />
        <Header {...config.products[1]} recommendedSku={props.recommendedSku} />
        <Header {...config.products[2]} recommendedSku={props.recommendedSku} />
        <Header {...config.products[3]} recommendedSku={props.recommendedSku} />
        <Header {...config.products[4]} recommendedSku={props.recommendedSku} />
      </Headers>

      <Slider/>

      <Features>
        <Feature {...config.products[0]} recommendedSku={props.recommendedSku} />
        <Feature {...config.products[1]} recommendedSku={props.recommendedSku} />
        <Feature {...config.products[2]} recommendedSku={props.recommendedSku} />
        <Feature {...config.products[3]} recommendedSku={props.recommendedSku} />
        <Feature {...config.products[4]} recommendedSku={props.recommendedSku} />
      </Features>
    </div>
  );
};
