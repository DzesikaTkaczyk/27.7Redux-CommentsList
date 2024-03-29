import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from "./reducers/reducer";
import { addComment } from "./components/actions";
import { createLogger } from 'redux-logger';
import DevTools from './DevTools';

const logger = createLogger();
const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));