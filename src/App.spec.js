import { doDecrement, doIncrement } from './App';

describe('Local State', () => {
  it('should increment the counter on state', () => {
    const state  ={counter: 0};
    const newState = doIncrement(state);

    expect(newState.counter).to.equal(1);
  });

  it('should decrement te counter on state', () => {
    const state  ={counter: 0};
    const newState = doDecrement(state);

    expect(newState.counter).to.equal(-1);
  });
});