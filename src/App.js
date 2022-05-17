
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

import Add from './component/Add'
import Edit from './component/Edit'
import View from './component/View'


const App = () => {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/view/:id" component={View} />

        </Switch>



      </Router>



    </div>
  )
}

export default App