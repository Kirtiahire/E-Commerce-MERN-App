import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './components/Weather';
import HourlyForecast from './components/HourlyForecast';
import FiveDayForecast from './components/FiveDayForecast';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Weather} />
          <Route path="/hourly" component={HourlyForecast} />
          <Route path="/five-day" component={FiveDayForecast} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
