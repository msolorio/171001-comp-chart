import React from 'react';

export default function Feature(props) {

  const recommendedClass = (
    !props.recommendedSku
    || props.highlighted.indexOf(props.sku) > -1
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
