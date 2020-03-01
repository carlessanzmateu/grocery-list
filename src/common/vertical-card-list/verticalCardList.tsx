import React from 'react';
import './verticalCardList.scss';

import VerticalCard from '../vertical-card/verticalCard';


function VerticalCardList(props: any) {
  const listItems = props.items.map((item: any) => {
    return(
      <VerticalCard 
        key={item.id} 
        onItemSelected={props.onItemSelected}
        onItemAddedToFavorite={props.onItemAddedToFavorite}
      />
    );
  })
  return(
    <div className={'vertical-card-list'}>
      <header className={'header'}>
        { props.title }
      </header>
      <div className={'content-wrapper'}>
        { listItems }
      </div>
    </div>
  );
}

export default VerticalCardList;
