import React from 'react';
import BigCalendar from 'react-big-calendar';

import Event from './Event'

const formats = {
  dayFormat: (date, culture, localizer) => localizer.format(date, 'ddd D/M', culture),
  timeGutterFormat: 'HH:mm [h]'
};

const events = [{
  'title': 'Reunión con recursos humanos',
  'start': new Date(2017, 10, 7, 9, 0, 30),
  'end': new Date(2017, 10, 7, 13, 0, 30)
}];

const components = {
  event: Event
}

export default (props) => (
  <BigCalendar
    key="calendar"
    {...props}
    events={events}
    components={components}
    views={['day']}
    toolbar={false}
    formats={formats}
    step={60}
    defaultDate={new Date(2017, 10, 7)}
  />
)