import React from 'react';
import './verticalCard.scss';

function VerticalCard() {
  return(
    <div className={'vertical-card'}>
      <span className={'favorite'}></span>
      <img 
        className={'image'}
        src={'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair'} 
      />
      <div className={'card-information'}>
        <h3 className={'title'}><strong>Unbranded Metal Chair</strong></h3>
        <p className={'description'}>
        Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.
        </p>
        <div className={'buy-info'}>
          <span className={'products-left'}>5 left</span>
          <a className={'add-btn'}>+ add</a>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard
