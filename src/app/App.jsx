import React from 'react';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { turnOnLed, turnOffLed } from './rest-service';

const style = {
  margin: 12,
};

export default class App extends React.Component {

  handleLed (status) {
    if (status === 'ON') {
      turnOnLed()
        .then(
          response => console.log(response.text),
          error => console.log(error)
        );
    } else {
      turnOffLed()
        .then(
          response => console.log(response.text),
          error => console.log(error)
        );
    }
  }

  render () {
    return (
      <div>
        <h1>Turn on the led!</h1>
        <RaisedButton label="ON" primary={ true } style={ style } onTouchTap={ () => this.handleLed('ON') } />
        <RaisedButton label="OFF" style={ style } onTouchTap={ () => this.handleLed('OFF') } />
      </div>
    );
  }
}
