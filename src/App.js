import React, { Component } from 'react';
import 'tachyons';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => this.setState({ robots: users}));
  }
  onSearchChange = (e) => {
    this.setState({searchfield : e.target.value});
  }
  render(){
        const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
   if( this.state.robots.length === 0){
     return <h1 className='tc'>Loading.....</h1>
   } else {
    return (
    <div className="App">  
    <h1 className='f1 tc'>RoboFriends</h1>
     <SearchBox  searchChange={this.onSearchChange}/>
     <Scroll>
   <CardList  robots={filteredRobots}/>
   </Scroll>
    </div>
  );
   }
    
}
  }

export default App;
