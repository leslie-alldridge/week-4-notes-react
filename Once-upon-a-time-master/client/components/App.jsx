import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav'
import Sidebar from './Sidebar'
import Storyboard from './Storyboard'

class App extends React.Component {
  render(){
    return (
    <div>
      <Router>
        <div>
          <div>
      <Route path="/" component={Nav}/>
        </div>
        <div className="sideplusstory">
        <Sidebar/>
      <div className="storyboard">
      <Route  path="/chapter/:story" render={props => {
              return <Storyboard {...props }/>
            }}/>
        </div>
        </div>
      </div>
      </Router>
    </div>
    )
  }
}


export default App