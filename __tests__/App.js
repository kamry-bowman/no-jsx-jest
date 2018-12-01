const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../App.js');

const root = document.createElement('div');

ReactDOM.render(React.createElement(App), root);

const counter = root.querySelector('h1');
const button = root.querySelector('button');

test('counter to initialize at 0', () => {
  expect(counter.textContent).toBe('0');
});
const evt = new window.Event('click');
button.dispatchEvent(evt);

test('counter to initialize at 1', () => {
  expect(counter.textContent).toBe('1');
});
