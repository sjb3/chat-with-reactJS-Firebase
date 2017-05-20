'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// export const App = () => (
//   render() {
//     <div>
//       <h1>react crap</h1>
//     </div>
//     document.getElementById('app')
//   }
// )

class App extends Component {
  render() {
    return (
      <div>
        React Crap!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
