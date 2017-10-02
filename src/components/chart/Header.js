import React from 'react';

export default function Header(props) {
  const recommendedBlock = (
    props.sku === props.recommendedSku
      ? <span>Recommended</span>
      : null
  );

  return (
    <div className="Header">
      <div className="recommendedContainer">
        {recommendedBlock}
      </div>
      <div className="headerBody">
        from header body
      </div>
    </div>
  );
};
