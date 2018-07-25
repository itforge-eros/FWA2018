import React, { Component } from 'react';
import './newsstyle.css';
import Newspic from './bg_night.jpg';

class Newsblock extends Component {
  render() {
    return (
      <div className="news-container">
        <div className="news-header">
          <h1>News</h1>
        </div>
        <div className="newspic-container">
          <img src={Newspic} />
        </div>
      </div>
    );
  }
}

export default Newsblock;
