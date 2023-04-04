import React from 'react';
import CardList from './CardList';
import { housings } from './housings';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      housings: housings,
      searchfield: ''
    }
  }

  onSearchChange= (event)=> {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const filteredHousings = this.state.housings.filter(housings=> {
      return housings.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>CAMPUS-COMPASS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList housings = {filteredHousings}/>
      </div>
      );
     }
    }


export default App;