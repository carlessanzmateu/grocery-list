import React from 'react';
import './verticalCard.scss';

function VerticalCard(props: any) {
  function getFavoriteCssClasses(): any {
    const isFavorite = props.item.getFavorite() === '1'

    return isFavorite ? 'favorite filled' : 'favorite';
  }
  return(
    <div className={'vertical-card'}>
      <span 
        className={getFavoriteCssClasses()}
        onClick={() => props.onItemAddedToFavorite(props.item)}
      ></span>
      <img 
        className={'image'}
        alt={props.item.getImageUrl()}
        src={props.item.getImageUrl()} 
      />
      <div className={'card-information'}>
        <h3 className={'title'}><strong>{ props.item.getProductName() }</strong></h3>
        <p className={'description'}>
          { props.item.getProductDescription() }
        </p>
        <div className={'buy-info'}>
          <span className={'products-left'}>{ props.item.getStock() } left</span>
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
