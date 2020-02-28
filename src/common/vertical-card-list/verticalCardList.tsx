import React from 'react';
import './verticalCardList.scss';

import VerticalCard from '../vertical-card/verticalCard';


function VerticalCardList(props: any) {
  const mockList = ['a', 'b', 'c', 'd', 'f', 'g', 'h']
  const listItems = mockList.map(item => {
    return(
      <VerticalCard key={item}/>
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
