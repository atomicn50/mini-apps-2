import React from 'react';

const Event = ({ event }) => (
  <div>
    <p>Date: {event.date}<button type="submit">Edit Info</button></p>
    <p>Description: {event.description}</p>
  </div>
);

export default Event;