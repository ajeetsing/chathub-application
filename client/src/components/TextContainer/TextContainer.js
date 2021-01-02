import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>ChatHub<span role="img" aria-label="emoji">💬</span></h1>
      <p>Realtime chat application </p>
      <h2>Created with React, Express, Node and Socket.IO </h2>

    </div>
    {
      users
        ? (
          <div>
            <h1>Live</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;