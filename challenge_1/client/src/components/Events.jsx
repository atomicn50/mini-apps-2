import React from 'react';
import Event from './Event.jsx';

const Events = ({ events }) => (
  <div>
  	<h1>Events</h1>
    {events.map(event => <Event event={event} key={event.description} />)}
  </div>
);


export default Events;
