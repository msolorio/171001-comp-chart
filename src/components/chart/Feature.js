import React from 'react';

export default function Feature(props) {

  const recommendedClass = (
    !props.recommendedSku
    || props.sku === props.recommendedSku
    || props.sku === props.hovered
    || props.sku === props.clicked
      ? ' highlighted'
      : ''
  );

  function handleMouseEnter() {
    props.handleMouseEnter(props.sku);
  }

  function handleMouseLeave() {
    props.handleMouseLeave(props.sku)
  }

  return (
    <div className={`Feature${recommendedClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      Feature
    </div>
  );
};
