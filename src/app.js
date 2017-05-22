'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { ChatRoom } from './Components/ChatRoom';

window.React = React;

render (
  <div>
    <ChatRoom />
  </div>,
  document.getElementById('app')
)
