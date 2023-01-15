import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey='9719c234c8f4447b85e93ce52236d935'
  //apiKey=process.env.NEWS_API_KEY

  state={
    progress:0,
    
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
              
            />
            <Routes>
              <Route exact path="/" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />} />
              <Route exact path="/general" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />} />
              <Route exact path="/sports" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" />} />
              <Route exact path="/science" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" />} />
              <Route exact path="/entertainment" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />} />
              <Route exact path="/business" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business" />} />
              <Route exact path="/technology" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology" />} />
              <Route exact path="/health" element={<News   setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health" />} />
            </Routes>
          </Router>
        </div>

      </>
    )
  }
}
