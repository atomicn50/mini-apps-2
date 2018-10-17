import React from 'react';

const Event = ({ event }) => (
  <div>
    <p>{event.date}</p>
    <p>{event.description}</p>
  </div>
);

export default Event;