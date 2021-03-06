import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import { WrapperApp } from './App'



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <WrapperApp />
    </Provider>,
    document.getElementById('root')
);