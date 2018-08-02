import React, { Component } from 'react';

import Hero from '../presentational/Hero';
import ToolList from '../presentational/ToolList';

import tools from '../../tools.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero
          title="JStart"
          subtitle="The definitive boilerplate for frontend applications" />

        <ToolList toolList={tools} />
      </div>
    );
  }
}

export default App;
