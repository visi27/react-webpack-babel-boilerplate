import { Counter, doDecrement, doIncrement } from './App';
import App from './App';
import React from 'react';

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

describe('App Component', () => {
  it('Renders the Counter component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Counter)).to.have.length(1);
  })

  it('Passes all props to Counter component', () => {
    const wrapper = shallow(<App/>);
    let counterWrapper = wrapper.find(Counter);

    expect (counterWrapper.props().counter).to.equal(0);

    wrapper.setState({counter: 1});

    counterWrapper = wrapper.find(Counter);
    expect (counterWrapper.props().counter).to.equal(1);
  });

  it('Increments the counter', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({ counter: 0 });

    wrapper.find('button.increment').simulate('click');
    expect(wrapper.state().counter).to.equal(1);
  });

  it('Decrements the counter', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({ counter: 0 });

    wrapper.find('button.decrement').simulate('click');
    expect(wrapper.state().counter).to.equal(-1);
  });
});