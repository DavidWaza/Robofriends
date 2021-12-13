import React, { Component } from 'react';
import 'tachyons';
import { robots } from './robots'
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }
  onSearchChange = (e) => {
    this.setState({searchfield : e.target.value});
  }
  render(){
        const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        console.log(filteredRobots);
    return (
    <div className="App">  
    <h1 className='f1 tc'>RoboFriends</h1>
     <SearchBox  searchChange={this.onSearchChange}/>
   <CardList  robots={filteredRobots}/>
    </div>
  );
}
  }

export default App;
