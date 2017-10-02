import React from 'react';

export default function Header(props) {

  const recommendedBlock = (
    props.sku === props.recommendedSku
      ? <span className="recommendedBlock">Recommended</span>
      : null
  );

  const recommendedClass = (
    !props.recommendedSku || props.sku === props.recommendedSku
      ? ' recommended'
      : ''
  );

  return (
    <div className="Header">
      <div className="recommendedContainer">
        {recommendedBlock}
      </div>
      <div className={`headerBody${recommendedClass}`}>
        from header body
      </div>
    </div>
  );
};
