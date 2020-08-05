import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./components/assets/CustomeCSS/mdb.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

export const history = createBrowserHistory({ forceRefresh: true });

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
