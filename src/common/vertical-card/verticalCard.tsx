import React from 'react';
import './verticalCard.scss';

function VerticalCard(props: any) {
  return(
    <div className={'vertical-card'}>
      <span 
        className={'favorite'}
        onClick={() => props.onItemAddedToFavorite(props.item)}
      ></span>
      <img 
        className={'image'}
        src={props.item.image_url} 
      />
      <div className={'card-information'}>
        <h3 className={'title'}><strong>{ props.item.productName }</strong></h3>
        <p className={'description'}>
          { props.item.productDescription }
        </p>
        <div className={'buy-info'}>
          <span className={'products-left'}>{ props.item.stock } left</span>
          <a
            className={'add-btn'}
            onClick={() => props.onItemSelected(props.item)}>
              + add
          </a>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard
