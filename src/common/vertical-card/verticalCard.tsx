import React from 'react';
import './verticalCard.scss';

function VerticalCard(props: any) {
  function getFavoriteCssClasses(): any {
    const isFavorite = props.item.favorite === '1'

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
        alt={props.item.image_url}
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
