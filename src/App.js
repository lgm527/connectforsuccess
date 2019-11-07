import React, { Component } from 'react';
import './App.css';

import SingleMentor from './Components/SingleMentor';
import AllMentors from './Components/AllMentors';

export default class App extends Component {
  state = {
    show: false,
    mentor: {}
  };

  showSingleMentor = mentor => {
    this.setState({ mentor: mentor, show: true });
  };

  showAll = () => {
    this.setState({ show: false, mentor: {} });
  };

  render() {
    return (
      <div>
        <img
          src="https://3xokx41zp3859n32sf9l2o17-wpengine.netdna-ssl.com/wp-content/themes/dfs/library/images/dfs-logo.png"
          alt="dress-for-success-logo"
          className="logo"
        ></img>
        <button
          type="button"
          onClick={this.showAll}
          className="allMentorsButton">
          Mentors
        </button>
        {this.state.show ? (
          <SingleMentor mentor={this.state.mentor} />
        ) : (
          <AllMentors showSingleMentor={this.showSingleMentor} />
        )}
      </div>
    );
  }
}
