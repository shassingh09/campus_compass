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
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <a href="/">Home</a>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 sublease'>
                    <a href="/roommate-finder">Sublease</a>
                    </li>
                    <li className='searchbox'>
                    <SearchBox searchChange={this.onSearchChange}/>
                    </li>
                </ul>
            </nav>
            <CardList housings = {filteredHousings}/> 
        </div>
    );
}
}

export default Navbar;