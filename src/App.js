import React, { Component } from 'react';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return (
      // <div>
      //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>
      <IterationSample />
    );
  }
}

export default App;
