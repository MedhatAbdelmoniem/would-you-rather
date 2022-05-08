import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Reducers'
import middleware from './middleware'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer,middleware)
store.subscribe(()=>{
  console.log(store.getState())
})
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
    ,
  document.getElementById('root')
);


