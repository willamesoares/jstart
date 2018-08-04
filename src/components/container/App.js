import React from 'react';

import Hero from '../presentational/Hero';
import ToolList from '../presentational/ToolList';

import tools from '../../tools';

const App = () => (
  <div className="App">
    <Hero
      title="JStart"
      subtitle="The definitive boilerplate for frontend applications"
    />

    <ToolList toolList={tools} />
  </div>
);

export default App;
