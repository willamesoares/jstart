import React from 'react';

import Hero from '../presentational/Hero';
import ToolList from '../presentational/ToolList';

import tools from '../../tools';

const App = () => (
  <div className="App">
    <Hero
      title="JStart"
      subtitle="Yet another boilerplate for frontend applications. Enjoy!"
    />

    <ToolList toolList={tools} />
  </div>
);

export default App;
