import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const middleware = [reduxThunk];

const store = createStore(
    rootReducer,
);
render(
    <Provider store={store}>
        <App  />
    </Provider>,
    document.getElementById('root')
)