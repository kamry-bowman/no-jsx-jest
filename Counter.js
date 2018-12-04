import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = (event) => {
      console.log('run');
      this.setState(prevState => ({ count: prevState.count + 1 }));
    };
  }

  render() {
    const h1 = React.createElement('h1', { key: 1 }, this.state.count);
    const inc = React.createElement('button', { type: 'button', onClick: this.increment, key: 2 }, '+');
    return React.createElement('div', null, [h1, inc]);
  }
}

export default Counter;
