import React from 'react';
import { RootStack } from './router';
import { createStore } from 'redux';
import { reducer } from './Redux/AppRedux';
import { Provider } from 'react-redux'

export let store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
