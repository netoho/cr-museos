import React from 'react';
import BigCalendar from 'react-big-calendar';

const formats = {
  dayFormat: (date, culture, localizer) => localizer.format(date, 'ddd D/M', culture),
  timeGutterFormat: 'HH:mm [h]'
};

export default (props) => (
  <BigCalendar
    key="calendar"
    {...props}
    events={[]}
    views={['day']}
    toolbar={false}
    formats={formats}
    step={60}
    defaultDate={new Date(2017, 11, 5)}
  />
)