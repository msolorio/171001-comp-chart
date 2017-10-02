import React from 'react';

export default function Feature(props) {

  const recommendedClass = (
    !props.recommendedSku || props.sku === props.recommendedSku
      ? ' recommended'
      : ''
  );

  return (
    <div className={`Feature${recommendedClass}`}>
      from Feature component
    </div>
  );
};
