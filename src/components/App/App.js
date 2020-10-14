import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import CVPage from '../CVPage/CVPage';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/cv" component={CVPage} exact />
    </Switch>
  );
}

export default App;
