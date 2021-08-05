import React from 'react';
import Search from './Search';
import Homes from './Homes';

import encodeUrl from 'encodeurl';
import axios from 'axios';

// import API_KEY from '../../../private';


const styles = {
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homes: [],
      isInputValid: true,
    }

    this.getGeocodedAddress = this.getGeocodedAddress.bind(this);
    this.findHomes = this.findHomes.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  findHomes(lat, lon, limit) {
    if (isNaN(limit)) {
      this.setState({isInputValid: false});
      return;
    }
    axios.post('http://localhost:3000/find-in-range', {
        lat,
        lon,
        limit
      })
      .then(res => {
        this.setState({homes: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  getGeocodedAddress(input) {
    const address = encodeUrl(input.address);
    const query = `https://api.tomtom.com/search/2/geocode/${address}.JSON?key=${API_KEY}`;

    axios.get(query)
      .then(res => {
        if (res.data.results[0] === undefined) {
          this.setState({isInputValid: false});
          return;
        }

        const resObj = res.data.results[0].position;

        return resObj
      })
      .then((pos) => {
        if (pos === undefined) return;
        
        const lat = pos.lat;
        const lon = pos.lon;
        const limit = input.range === '' ? '1' : input.range; // Default search radius to 1 mile if not provided by user

        
        this.findHomes(lat, lon, limit);
      })
      .catch(err => {
        console.log(err);
      })
  }

  clearSearch() {
    this.setState({ homes: [], isInputValid: true });
  }

  render() {
    const renderedHomes = this.state.homes;
    const isInputValid = this.state.isInputValid;

    return (
      <div style={styles}>
        <h1>Hearth Full-stack Challenge</h1>
        <Search handleSearch={this.getGeocodedAddress} />
        <button onClick={this.clearSearch}> Clear search </button>
        {isInputValid ? <Homes  homes={renderedHomes} /> : <p>Your input is not valid. Please clear the search and try again.</p>}
      </div>
    )
  }
}

export default App;
