import React from 'react';
import HomeEntry from './HomeEntry';

const Homes = (props) => {
  return (
    <div>
      {props.homes.map((home, idx) => {
        return <HomeEntry key={idx} home={home} />
      })}
    </div>
  )
}

export default Homes;
