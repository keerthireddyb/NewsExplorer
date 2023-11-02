import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import  { NewsGraph }  from "./components/NewsGraph/NewsGraph";
//import { NewsGraphNew } from "./components/NewsGraph/NewsGraphNew";
import { NewsMapNew } from "./components/NewsMap/NewsMapNew";
import { NewsMain } from "./components/NewsMain";
import { NewsMainNew } from "./components/NewsMainNew";
import { createBrowserHistory } from "history";
import "./styles/mainstyles.scss";

const history = createBrowserHistory();

const store = configureStore();
const App = () => {
  return (
    <ReduxProvider store={store}>
      <React.StrictMode>
        <Router history={history}>
           {/* <newsGraph /> */}
          <Switch>
           <Route path="/graph" element={<NewsGraph/>} />
            <Route path="/" element={<NewsMain/>} />
            <Route path="/map" element={<NewsMapNew/>} />
            {/* <Route exact path="/ADauth" element={DCSADAuthentication}/> */}
          </Switch>
        </Router>
      </React.StrictMode>
    </ReduxProvider>
  )
}

export default App
