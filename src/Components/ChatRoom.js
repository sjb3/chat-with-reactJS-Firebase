import React, { Component } from 'react';
import { render } from 'react-dom';

export class ChatRoom extends Component {
  render() {
    return (
      <div>
        <h1>This is the chat room</h1>
        <ol>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
          <li>Message 4</li>

        </ol>
        <input type="text" placeholder="Type here ..." />
        <br />
        <button>Submit</button>
      </div>
    )
  }
}

// export default ChatRoom

// export const ChatRoom = () => (
//   render() {
//     return (
//       <div>
//         <h1>Chat Room</h1>
//       </div>
//   )
//   }
// )
