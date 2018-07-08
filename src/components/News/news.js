import React , { Component } from 'react';
import './news.css'
import Newspic from './bg_night.jpg'

class News extends Component {
  render() {
    return (
      <div className="news-container">
        <div className="news-header">
          <h1>News</h1>
        </div>
        <div className="newspic-container">
          <img src={Newspic}/>
        </div>
      </div>
    );
  }
}

export default News;