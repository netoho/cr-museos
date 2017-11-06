import React from 'react';
import BigCalendar from 'react-big-calendar';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

export default (props) => (
  <BigCalendar
    {...props}
    events={[]}
    views={allViews}
    step={60}
    defaultDate={new Date(2017, 11, 5)}
  />
)