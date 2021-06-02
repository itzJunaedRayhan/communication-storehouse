import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacts from './Components/Contacts/Contacts';
import MenuBar from './Components/MenuBar/MenuBar';
import logo from './logo.svg';
import './styles/App.scss';
import { Provider } from "react-redux";
import { store } from './Redux/store/store';
import AddContact from "./Components/AddContacts/AddContact";
import EditContact from "./Components/EditContact/EditContact";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MenuBar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/">
                  <Contacts />
                </Route>
                <Route path="/contacts/add">
                  <AddContact />
                </Route>
                <Route path="/contacts/edit/:id">
                  <EditContact />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
