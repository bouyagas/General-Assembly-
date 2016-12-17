import React, { Component } from 'react';
import Post from './Post';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
     blogAuthor: "Mohamed Gassama"
    };
  }
  render() {
    return (
     <div>
        <h1>Welcome to my Blog!</h1>
        <Post postAuthor={this.state.blogAuthor} />
     </div>
    );
  }
}

export default App;
