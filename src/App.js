import React, { Component } from 'react';
import DottedBox from './dottedBox';
import Box from './box';
import DashedBox from './dashedBox';

class App extends Component {

  render() {
    return (
      <div>
        <DottedBox />
        <Box />
        <DashedBox />
      </div>
    );
  }
}
export default App;
