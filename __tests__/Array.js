const method = require('../Array');

test('snapshot', () => {
    expect(method()).toMatchSnapshot();
});