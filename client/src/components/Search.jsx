import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      address: '',
      range: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state);
    
    this.setState({
      address: '',
      range: '',
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <label>
          Enter your San Francisco address:
          <input
            name="address"
            type="text"
            placeholder="search..."
            value={this.state.address}
            onChange={this.handleChange} />
        </label>
        <br />
        <br />
        <label>
          Miles radius:
          <input
            name="range"
            type="text"
            placeholder="input from 1 to 5 miles"
            value={this.state.range}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Find Homes" />
      </form>
    )
  }
};

export default Search;
