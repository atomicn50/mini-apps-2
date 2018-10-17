import React from 'react';
import Event from './Event.jsx';

const Events = ({ events }) => (
  <div>
    {events.map(event => <Event event={event} />)}
  </div>
);


export default Events;
