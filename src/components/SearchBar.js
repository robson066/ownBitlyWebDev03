import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

class Searchbar extends React.Component {
  handleInputChange = (event) => {
    this.setState({
      searchPhrase: event.target.value
    });
  };

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.handleSearch();
    }
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchPhrase);
  };

  constructor() {
    super();

    this.state = {
      searchPhrase: ''
    };
  }

  

  render() {
    return (
      <div className="searchbar">
      <Paper elevation={10}>
        <input value={this.state.searchPhrase}
               onChange={this.handleInputChange}
               onKeyPress={this.handleKeyPress}
               className="searchbar-input"/>
        <div className='searchbarIcons'>
          <Icon className='searchbarIcons-icon'
                onClick={this.handleSearch}>
            search
          </Icon>
          <Link to="/add">
            <Icon className='searchbarIcons-icon'>
              add
            </Icon>
          </Link>
        </div>
        </Paper>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func
};

export default Searchbar;
