import React, { Component } from 'react';
import DottedBox from './dottedBox';
import Box from './box';

class App extends Component {

  render() {
    return (
      <div>
        <DottedBox />
        <Box />
      </div>
    );
  }
}
export default App;
