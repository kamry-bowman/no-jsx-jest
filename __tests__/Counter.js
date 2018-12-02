const React = require('react');
const ReactDOM = require('react-dom');
const Counter = require('../Counter.js');


const root = document.createElement('div');
let counter;
let button;


beforeAll(() => {
document.body.appendChild(root);
ReactDOM.render(React.createElement(Counter), root);
counter = root.querySelector('h1');
button = root.querySelector('button');
})

afterAll(() => {
  document.body.innerHTML='';

});

test('counter to initialize at 0', () => {
  expect(counter.textContent).toBe('0');
});


test('counter to increment by 1', () => {
  const evt = new window.Event('click', { bubbles: true });
  button.dispatchEvent(evt);
  expect(counter.textContent).toBe('1');
});

test('counter to increment by 1 again', () => {
  const evt2 = new window.Event('click', { bubbles: true });
  button.dispatchEvent(evt2);
  expect(counter.textContent).toBe('2');
});
