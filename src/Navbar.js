import React from'react';
import './Navbar.css';
import SearchBox from './SearchBox';
import { housings } from './housings';
import CardList from './CardList';


class Navbar extends React.Component{

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
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                <img alt='Compass Compass' src='../images/cc-logo.png'/>
                </div>

                <ul className="navbar-links">
                    <li>
                    <SearchBox searchChange={this.onSearchChange}/>
                    </li>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/search">Search</a>
                    </li>
                    <li>
                    <a href="/roommate-finder">Roommate Finder</a>
                    </li>
                    <li>
                    <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
            <CardList housings = {filteredHousings}/> 
        </div>
    );
}
}

export default Navbar;