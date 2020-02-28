import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import CreateNewAd from './containers/Ads/CreateNewAd/CreateNewAd'

function App() {
  return (
    <div>
      <Layout>
      <Switch>
          <Route path="/create-new-ad" component={CreateNewAd} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
