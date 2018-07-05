import React, { Component } from 'react';
import WorldCup from './worldcup';
import Navbar from './navbar'
import './App.css';

class App extends Component {
  
  static defaultProps = {
    teams: [
      {
        title: "England",
        img: "https://cdn1.uksoccershop.com/images/cache/england-2016-2017-nike-home-football-kit-475x0.jpg",
        desc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        players: ['Kane', 'Pickford', 'Rose', 'Cahill']
      },
      {
        title: "Brazil",
        img: "https://images.sportsdirect.com/images/products/37123413_l.jpg",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        players: ['Neymar', 'Firminho', 'Coutinho', 'Marcelo']
      },
      {
        title: "Sweden",
        img: "https://cdn1.uksoccershop.com/images/cache/1510330637-re-sweden-away-concept-front-475x0.jpg",
        desc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        players: ['Ibra', 'Him', 'Ovic', 'Cahill']
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.props.teams.map((r, i) => (
          <WorldCup key={i} {...r} />      
        ))}
      </div>
    );
  }
}

export default App;
