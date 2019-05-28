import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: [
        { name: 'phone', url: '' },
        { name: 'facebook', url: 'facebook.com' },
        { name: 'twitter', url: 'twitter.com' },
        { name: 'email', url: '' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
