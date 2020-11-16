import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import PostOne from './components/PostOne'
import PostTwo from './components/PostTwo'
import PostThree from './components/PostThree'
import Home from './components/Home'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
      <Switch>
        <Route path='/postOne' component={PostOne} />
        <Route path='/postTwo' component={PostTwo} />
        <Route path='/postThree' component={PostThree} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
