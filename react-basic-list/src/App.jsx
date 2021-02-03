import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ConsultProcess from './components/pages/ConsultProcess';
import CreateProcess from './components/pages/CreateProcess';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/consult">
          <ConsultProcess />
        </Route>
        <Route path="/">
          <CreateProcess />
        </Route>
      </Switch>
    </Router>
  )
}

export default App