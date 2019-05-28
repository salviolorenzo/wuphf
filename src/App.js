import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: [
        { name: 'phone', url: '', class: 'fas fa-phone-square' },
        { name: 'email', url: '', class: 'fas fa-at' },
        {
          name: 'facebook',
          url: 'facebook.com',
          class: 'fab fa-facebook-square'
        },
        { name: 'twitter', url: 'twitter.com', class: 'fab fa-twitter-square' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main socials={this.state.socials} />
      </div>
    );
  }
}
