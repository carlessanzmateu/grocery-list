import React from 'react';
import './horizontalCard.scss';

function HorizontalCard() {
  return(
    <div className={'horizontal-card'}>
      <img 
        className={'image'}
        src={'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair'} 
      />
      <div className={'card-information'}>
        <h3 className={'title'}><strong>Unbranded Metal Chair</strong></h3>
        <div className={'buy-info'}>
          <span className={'products-left'}>5 left</span>
        </div>
      </div>
      <div className={'amount'}>1135$</div>
    </div>
  );
}

export default HorizontalCard
