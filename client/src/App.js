import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './page/Index';
import CardInfo from './page/CardInfo';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/cardInfo/:id" exact component={CardInfo} />
        </Switch>
      </Router>
    </div>
  )
}

export default App