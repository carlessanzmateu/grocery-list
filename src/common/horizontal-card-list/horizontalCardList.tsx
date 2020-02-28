import React from 'react';
import './horizontalCardList.scss';

import HorizontalCard from '../horizontal-card/horizontalCard';


function HorizontalCardList(props: any) {
  const mockList = ['a', 'b', 'c', 'd', 'f', 'g', 'h']
  const listItems = mockList.map(item => {
    return(
      <HorizontalCard key={item}/>
    );
  })
  return(
    <div className={'horizontal-card-list'}>
      <header className={'header'}>
        { props.title }
      </header>
      <div className={'content-wrapper'}>
        { listItems }
      </div>
      <div className={'interaction-zone'}>
        <p className={'summary'}>Total amount: 1000$</p>
        <a>Checkout</a>
      </div>
    </div>
  );
}

export default HorizontalCardList;
