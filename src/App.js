import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      random: 2,
    }
  }
  render(){
    return (
      <div>
        <img alt='poke' className='pokemon' src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+this.state.random+'.png'}/>
        {this.randomize()}
      </div>
    );
  }

  randomize = () => {
    setTimeout(function() {
      const min = 1;
      const max = 807;
      const rand = min + Math.random() * (max - min);
      this.setState({ random: Math.trunc(rand) });
    }.bind(this), 1000)
  }
}
