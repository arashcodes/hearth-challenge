import React from 'react';

const styles = {
  border: '1px solid rgba(0, 0, 0, 0.05)',
  width: '350px',
  padding: '5px',
  margin: '5px',
  alignItems: 'left',
};

const homeEntry = (props) => {
  return (
    <div style={styles}>
      Address: {`${props.home.ADDRESS}, ${props.home.CITY}, ${props.home['STATE OR PROVINCE']}, ${props.home['ZIP OR POSTAL CODE']}`}
      <br />
      Beds: {props.home.BEDS}
      <br />
      Baths: {props.home.BATHS}
      <br />
      Days on market: {props.home['DAYS ON MARKET']}
      <br />
      Square feet: {props.home['SQUARE FEET']}
      <br />
      Price: {props.home.PRICE}
      <br />
      Year built: {props.home['YEAR BUILT']}
    </div>
    )
}

export default homeEntry;
