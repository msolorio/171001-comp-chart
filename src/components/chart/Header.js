import React from 'react';

export default function Header(props) {

  const recommendedBlock = (
    props.sku === props.recommendedSku
      ? <span className="recommendedBlock">Recommended</span>
      : null
  );

  const highlightedClass = (
    !props.recommendedSku
    || props.sku === props.recommendedSku
    || props.sku === props.hovered
      ? ' highlighted'
      : ''
  );

  function handleMouseEnter() {
    props.handleMouseEnter(props.sku);
  }

  function handleMouseLeave() {
    props.handleMouseLeave(props.sku);
  }

  return (
    <div className="Header">
      <div className="recommendedContainer">
        {recommendedBlock}
      </div>
      <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <div className={`headerBody${highlightedClass}`}>
          Header Body
        </div>
        <div className={`moreDetails${highlightedClass}`}>More Details</div>
      </div>
    </div>
  );
};
