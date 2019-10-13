import React, { Component } from 'react';

class SingleMentor extends Component {
  render() {
    let { mentor } = this.props;
    return (
      <div className="singleMentorContainer">
        <img
          src="https://www.belr.com/wp-content/uploads/2017/06/avatar-placeholder-generic-1.jpg"
          alt="mentor"
          className="singleMentorImage"
        ></img>
        <div className="singleMentorName">
          {mentor.firstName.toUpperCase()} {mentor.lastName.toUpperCase()}
        </div>
        <div className="singleMentorLocation">{mentor.location}</div>
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <div className="singleMentorBio">{mentor.bio}</div>

        <div className="icon">
          <ion-icon
            name="logo-linkedin"
            style={{
              width: 75,
              height: 75,
              color: '#b32b33',
              cursor: 'pointer'
            }}
          ></ion-icon>
        </div>
        <div className="icon">
          <a href={`mailto:${mentor.email}`}>
            <ion-icon
              name="mail"
              style={{
                width: 75,
                height: 75,
                color: '#b32b33',
                cursor: 'pointer'
              }}
            ></ion-icon>
          </a>
        </div>
      </div>
    );
  }
}

export default SingleMentor;
