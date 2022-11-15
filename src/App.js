import './App.css';

import React, { Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
        <>
          <Navbar/>
          <News pageSize={12} country="us" category={category}/>
        </>
    )
  }
}