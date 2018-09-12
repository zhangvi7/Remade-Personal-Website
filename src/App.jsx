import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.jsx';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Main />
        </div>

    );
  }
}

export default App;
