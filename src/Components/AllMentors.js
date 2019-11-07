import React, { Component } from 'react';
import mentors from '../data.js';
import ava from '../ava.jpg';

class AllMentors extends Component {
  state = {
    mentors: [],
    filters: [],
    submitted: false
  };

  componentDidMount() {
    this.setState({ mentors });
  }

  arrayToList = arr => {
    return arr.join(' ');
  };

  setFilters = (filter) => {
   this.setState({filters: [...this.state.filters, filter]})
  };

  filteredMentors = () => {


    if (this.state.submitted) {
      let checker = (arr, target) => target && target.every(v => arr.includes(v) );

      let filtered = this.state.mentors.filter(mentor => {
        return checker(mentor.skills, this.state.filters)
      })

      return filtered.map((p, i) => {
        return (
          <div className="mentor" key={i}>
            <img src={ava} alt="mentor" />
            <h1
              onClick={() => {
                this.props.showSingleMentor(p);
              }}
              className="mentorName"
            >
              {p.firstName} {p.lastName}
            </h1>
              <div className="header">Location: </div>
              {' ' + p.location}<br></br>
              <div className="header">Industry: </div>
              {' ' + p.industry}<br></br>
              <div className="header">Skills: </div>{' '}
              {' ' + this.arrayToList(p.skills)}<br></br>
              <div className="header">Connection: </div>{' '}
              {' ' + this.arrayToList(p.connection)}<br></br>
              <div className="header">Days Available: </div>{' '}
              {' ' + this.arrayToList(p.daysAvailable)}<br></br>
              <div className="header">Times Available: </div>{' '}
              {' ' + this.arrayToList(p.timesAvailable)}
          </div>
        );
      });
    } else {
    return mentors.map((p, i) => {
      return (
        <div className="mentor" key={i}>
          <img src={ava} alt="mentor" />
          <h1
            onClick={() => {
              this.props.showSingleMentor(p);
            }}
            className="mentorName"
          >
            {p.firstName} {p.lastName}
          </h1>
            <div className="header">Location: </div>
            {' ' + p.location}<br></br>
            <div className="header">Industry: </div>
            {' ' + p.industry}<br></br>
            <div className="header">Skills: </div>{' '}
            {' ' + this.arrayToList(p.skills)}<br></br>
            <div className="header">Connection: </div>{' '}
            {' ' + this.arrayToList(p.connection)}<br></br>
            <div className="header">Days Available: </div>{' '}
            {' ' + this.arrayToList(p.daysAvailable)}<br></br>
            <div className="header">Times Available: </div>{' '}
            {' ' + this.arrayToList(p.timesAvailable)}
        </div>
      );
    });}
  };

  render() {

    return (
      <>
        <div id="filters">

          <h3>Skills</h3>
          <label>
            Interview Prep
            <input
              type="checkbox"
              onChange={() => {
                this.setFilters('interview prep');
              }}
            />
          </label>
          <label>
            Salary Negotiation
            <input
              type="checkbox"
              onChange={() => {
                this.setFilters('salary negotiation');
              }}
            />
          </label>
          <label>
            Job Search
            <input
              type="checkbox"
              onChange={() => {
                this.setFilters('job search');
              }}
            />
          </label>
          <label>
            Networking
            <input
              type="checkbox"
              onChange={() => {
                this.setFilters('networking');
              }}
            />
          </label>
          <label>
            Resume
            <input
              type="checkbox"
              onChange={() => {
                this.setFilters('resume');
              }}
            />
          </label>
          <input type="submit" onClick={() => {this.setState({submitted: true})}}/>
        </div>
        <div className="mentors">{this.filteredMentors()}</div>
      </>
    );
  }
}

export default AllMentors;
