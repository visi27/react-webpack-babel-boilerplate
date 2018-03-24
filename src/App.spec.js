import { Counter, doDecrement, doIncrement } from './App';
import App from './App';
import React from 'react';
import * as axios from 'axios';

describe('Local State', () => {
  it('should increment the counter on state', () => {
    const state = {counter: 0};
    const newState = doIncrement(state);

    expect(newState.counter).to.equal(1);
  });

  it('should decrement te counter on state', () => {
    const state = {counter: 0};
    const newState = doDecrement(state);

    expect(newState.counter).to.equal(-1);
  });
});

describe('App Component', () => {
  const result = {data: {total: 12}};
  const promise = Promise.resolve(result);

  before(() => {
    sinon.stub(axios, 'get').withArgs('https://reqres.in/api/unknown').returns(promise);
  });

  after(() => {
    axios.get.restore();
  });

  it('Renders the Counter component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Counter)).to.have.length(1);
  });

  it('Passes all props to Counter component', () => {
    const wrapper = shallow(<App/>);
    let counterWrapper = wrapper.find(Counter);

    expect(counterWrapper.props().counter).to.equal(0);

    wrapper.setState({counter: 1});

    counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).to.equal(1);
  });

  it('Increments the counter', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({counter: 0});

    wrapper.find('button.increment').simulate('click');
    expect(wrapper.state().counter).to.equal(1);
  });

  it('Decrements the counter', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({counter: 0});

    wrapper.find('button.decrement').simulate('click');
    expect(wrapper.state().counter).to.equal(-1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');

    const wrapper = mount(<App/>);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('fetches async counters', () => {
    const wrapper = mount(<App/>);

    expect(wrapper.state().counter).to.equal(0);
    promise.then((res) => {
      console.log(res);
      expect(wrapper.state().counter).to.equal(res.data.total);
    })
           .catch(error => console.log(error));
  });
});