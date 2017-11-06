import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="scoreboard">
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="players">
          <div className="player">
            <div className="player-name">
              Megan
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 31 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
        <div className="player">
          <div className="player-name">
            Michelle
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 35 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  title: "Scoreboard",
};

export default App;
