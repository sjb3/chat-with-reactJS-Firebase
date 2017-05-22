import React, { Component } from 'react';
import { render } from 'react-dom';

export class ChatRoom extends Component {

  constructor(props, context) {
    super(props, context)
    this.updatedMessage = this.updatedMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      message: '',
      messages: [
        // {id: 0, text: 'first msg'},
        // {id: 1, text: 'second msg'},
        // {id: 2, text: 'third msg'},
        // {id: 3, text: 'fouth msg'}
          ]
        }
      }

  componentDidMount() {
      console.log('componentDidMount');

      firebase.database().ref('messages/').on('value', (snapshot) => {
        const currentMessage = snapshot.val()
        if (currentMessage != null){
          this.setState({
            messages: currentMessage
          })
        }
      })
  }

  updatedMessage(e) {
    console.log('updatedMessage: '+ e.target.value);
    this.setState({
      message: e.target.value
    })
  }

  submitMessage(e) {
    console.log('submitMessage'+ this.state.message);

    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    //send to firebase
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)

    // var list = Object.assign([], this.state.messages);
    // list.push(nextMessage)
    // this.setState({
    //   messages: list
    // })
  }

  render() {
    const currentMessage = this.state.messages.map( (message, i) => {
      return (
        <li key = {message.id}>{message.text}</li>
      )
    })

    return (
      <div>
        <h1>This is the chat room</h1>
          <ol>
            {currentMessage}
          </ol>

        <input onChange={this.updatedMessage} type="text" placeholder="Type here ..." />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
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
