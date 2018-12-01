const React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 0;
    this.increment = (event) => {
      console.log('run');
      this.setState(prevState => prevState + 1);
    };
  }

  render() {
    const h1 = React.createElement('h1', { key: 1 }, this.state);
    const inc = React.createElement('button', { type: 'button', onClick: this.increment, key: 2 }, '+');
    return React.createElement('div', null, [h1, inc]);
  }
}

module.exports = App;
