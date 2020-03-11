import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import RepoDetail from './views/RepoDetail'


function App() {




  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route
              path='/'
              component={Home}
              exact
            />
            <Route
              path='/'
              component={Home}
              exact
            />
            <Route
              path='/RepoDetail/:author/:name'
              component={RepoDetail}
              exact
            />
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  )

}

export default App
