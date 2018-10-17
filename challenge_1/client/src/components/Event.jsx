import React from 'react';

const Event = ({ event }) => (
  <div>
    <p>Date: {event.date}</p>
    <p>Description: {event.description}</p>
  </div>
);

export default Event;