import { colors } from '../../theme/colors';

export default `
.rbc-btn {
  color: inherit;
  font: inherit;
  margin: 0;
}
button.rbc-btn {
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled].rbc-btn {
  cursor: not-allowed;
}
button.rbc-input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.rbc-calendar {
  box-sizing: border-box;
  height: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
}
.rbc-calendar *,
.rbc-calendar *:before,
.rbc-calendar *:after {
  box-sizing: inherit;
}
.rbc-abs-full,
.rbc-row-bg {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.rbc-ellipsis,
.rbc-event-label,
.rbc-row-segment .rbc-event-content,
.rbc-show-more {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rbc-rtl {
  direction: rtl;
}
.rbc-off-range {
  color: #999999;
}
.rbc-off-range-bg {
  background: #e5e5e5;
}
.rbc-header {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 3px;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 90%;
  min-height: 0;
}
.rbc-header > a,
.rbc-header > a:active,
.rbc-header > a:visited {
  color: inherit;
  text-decoration: none;
}
.rbc-row-content {
  position: relative;
  -moz-user-select: none;
   -ms-user-select: none;
       user-select: none;
  -webkit-user-select: none;
  z-index: 4;
}
.rbc-today {
  background-color: #eaf6ff;
}
.rbc-toolbar {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
}
.rbc-toolbar .rbc-toolbar-label {
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  padding: 0 10px;
  text-align: center;
}
.rbc-toolbar button {
  color: #373a3c;
  display: inline-block;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  background: none;
  background-image: none;
  border: 1px solid #ccc;
  padding: .375rem 1rem;
  border-radius: 4px;
  line-height: normal;
  white-space: nowrap;
}
.rbc-toolbar button:active,
.rbc-toolbar button.rbc-active {
  background-image: none;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  background-color: #e6e6e6;
  border-color: #adadad;
}
.rbc-toolbar button:active:hover,
.rbc-toolbar button.rbc-active:hover,
.rbc-toolbar button:active:focus,
.rbc-toolbar button.rbc-active:focus {
  color: #373a3c;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.rbc-toolbar button:focus {
  color: #373a3c;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.rbc-toolbar button:hover {
  color: #373a3c;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.rbc-btn-group {
  display: inline-block;
  white-space: nowrap;
}
.rbc-btn-group > button:first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.rbc-btn-group > button:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.rbc-rtl .rbc-btn-group > button:first-child:not(:last-child) {
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.rbc-rtl .rbc-btn-group > button:last-child:not(:first-child) {
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.rbc-btn-group > button:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.rbc-btn-group button + button {
  margin-left: -1px;
}
.rbc-rtl .rbc-btn-group button + button {
  margin-left: 0;
  margin-right: -1px;
}
.rbc-btn-group + .rbc-btn-group,
.rbc-btn-group + button {
  margin-left: 10px;
}
.rbc-event {
  cursor: pointer;
  padding: 2px 5px;
  background-color: #3174ad;
  border-radius: 5px;
  color: #fff;
}
.rbc-event.rbc-selected {
  background-color: #265985;
}
.rbc-event-label {
  font-size: 80%;
}
.rbc-event-overlaps {
  box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
}
.rbc-event-continues-prior {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.rbc-event-continues-after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.rbc-event-continues-earlier {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.rbc-event-continues-later {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.rbc-event-continues-day-after {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.rbc-event-continues-day-prior {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.rbc-row {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
}
.rbc-row-segment {
  padding: 0 1px 1px 1px;
}
.rbc-selected-cell {
  background-color: rgba(0, 0, 0, 0.1);
}
.rbc-show-more {
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 4;
  font-weight: bold;
  font-size: 85%;
  height: auto;
  line-height: normal;
  white-space: nowrap;
}
.rbc-month-view {
  position: relative;
  border: 1px solid #DDD;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex: 1 0 0;
      -ms-flex: 1 0 0px;
          flex: 1 0 0;
  width: 100%;
  -moz-user-select: none;
   -ms-user-select: none;
       user-select: none;
  -webkit-user-select: none;
  height: 100%;
}
.rbc-month-view .rbc-header {
  border-bottom: 1px solid #DDD;
}
.rbc-month-view .rbc-header + .rbc-header {
  border-left: 1px solid #DDD;
}
.rbc-rtl .rbc-month-view .rbc-header + .rbc-header {
  border-left-width: 0;
  border-right: 1px solid #DDD;
}
.rbc-month-header {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
}
.rbc-month-row {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex: 1 0 0;
      -ms-flex: 1 0 0px;
          flex: 1 0 0;
  overflow: hidden;
  height: 100%;
}
.rbc-month-row + .rbc-month-row {
  border-top: 1px solid #DDD;
}
.rbc-date-cell {
  padding-right: 5px;
  text-align: right;
}
.rbc-date-cell.rbc-now {
  font-weight: bold;
}
.rbc-date-cell > a,
.rbc-date-cell > a:active,
.rbc-date-cell > a:visited {
  color: inherit;
  text-decoration: none;
}
.rbc-row-bg {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-flex: 1 0 0;
      -ms-flex: 1 0 0px;
          flex: 1 0 0;
  overflow: hidden;
}
.rbc-day-bg + .rbc-day-bg {
  border-left: 1px solid #DDD;
}
.rbc-rtl .rbc-day-bg + .rbc-day-bg {
  border-left-width: 0;
  border-right: 1px solid #DDD;
}
.rbc-overlay {
  position: absolute;
  z-index: 5;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  padding: 10px;
}
.rbc-overlay > * + * {
  margin-top: 1px;
}
.rbc-overlay-header {
  border-bottom: 1px solid #e5e5e5;
  margin: -10px -10px 5px -10px;
  padding: 2px 10px;
}
.rbc-agenda-view {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex: 1 0 0;
      -ms-flex: 1 0 0px;
          flex: 1 0 0;
  overflow: auto;
}
.rbc-agenda-view table {
  width: 100%;
  border: 1px solid #DDD;
}
.rbc-agenda-view table tbody > tr > td {
  padding: 5px 10px;
  vertical-align: top;
}
.rbc-agenda-view table .rbc-agenda-time-cell {
  padding-left: 15px;
  padding-right: 15px;
  text-transform: lowercase;
}
.rbc-agenda-view table tbody > tr > td + td {
  border-left: 1px solid #DDD;
}
.rbc-rtl .rbc-agenda-view table tbody > tr > td + td {
  border-left-width: 0;
  border-right: 1px solid #DDD;
}
.rbc-agenda-view table tbody > tr + tr {
  border-top: 1px solid #DDD;
}
.rbc-agenda-view table thead > tr > th {
  padding: 3px 5px;
  text-align: left;
  border-bottom: 1px solid #DDD;
}
.rbc-rtl .rbc-agenda-view table thead > tr > th {
  text-align: right;
}
.rbc-agenda-time-cell {
  text-transform: lowercase;
}
.rbc-agenda-time-cell .rbc-continues-after:after {
  content: ' »';
}
.rbc-agenda-time-cell .rbc-continues-prior:before {
  content: '« ';
}
.rbc-agenda-date-cell,
.rbc-agenda-time-cell {
  white-space: nowrap;
}
.rbc-agenda-event-cell {
  width: 100%;
}
.rbc-time-column {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  min-height: 100%;
}
.rbc-time-column .rbc-timeslot-group {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.rbc-timeslot-group {
  border-bottom: 1px solid #DDD;
  min-height: 40px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column nowrap;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
}
.rbc-time-gutter,
.rbc-header-gutter {
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
}
.rbc-label {
  padding: 0 5px;
}
.rbc-day-slot {
  position: relative;
}
.rbc-day-slot .rbc-event {
  border: 1px solid #265985;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-height: 100%;
  -webkit-flex-flow: column wrap;
      -ms-flex-flow: column wrap;
          flex-flow: column wrap;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  overflow: hidden;
}
.rbc-day-slot .rbc-event-label {
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  padding-right: 5px;
  width: auto;
}
.rbc-day-slot .rbc-event-content {
  width: 100%;
  -webkit-flex: 1 1 0;
      -ms-flex: 1 1 0px;
          flex: 1 1 0;
  word-wrap: break-word;
  line-height: 1;
  height: 100%;
  min-height: 1em;
}
.rbc-day-slot .rbc-time-slot {
  border-top: 1px solid #f7f7f7;
}
.rbc-time-slot {
  -webkit-flex: 1 0 0;
      -ms-flex: 1 0 0px;
          flex: 1 0 0;
}
.rbc-time-slot.rbc-now {
  font-weight: bold;
}
.rbc-day-header {
  text-align: center;
}
.rbc-day-slot .rbc-event {
  position: absolute;
  z-index: 2;
}
.rbc-slot-selection {
  z-index: 10;
  position: absolute;
  cursor: default;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 75%;
  padding: 3px;
}
.rbc-time-view {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 100%;
  border: 1px solid #DDD;
  min-height: 0;
}
.rbc-time-view .rbc-time-gutter {
  white-space: nowrap;
}
.rbc-time-view .rbc-allday-cell {
  width: 100%;
  position: relative;
}
.rbc-time-view .rbc-allday-events {
  position: relative;
  z-index: 4;
}
.rbc-time-view .rbc-row {
  min-height: 20px;
}
.rbc-time-header {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
}
.rbc-time-header.rbc-overflowing {
  border-right: 1px solid #DDD;
}
.rbc-rtl .rbc-time-header.rbc-overflowing {
  border-right-width: 0;
  border-left: 1px solid #DDD;
}
.rbc-time-header > .rbc-row > * + * {
  border-left: 1px solid #DDD;
}
.rbc-rtl .rbc-time-header > .rbc-row > * + * {
  border-left-width: 0;
  border-right: 1px solid #DDD;
}
.rbc-time-header > .rbc-row:first-child {
  border-bottom: 1px solid #DDD;
}
.rbc-time-header .rbc-gutter-cell {
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
}
.rbc-time-header > .rbc-gutter-cell + * {
  width: 100%;
}
.rbc-time-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1 0 0%;
      -ms-flex: 1 0 0%;
          flex: 1 0 0%;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 100%;
  border-top: 2px solid #DDD;
  overflow-y: auto;
  position: relative;
}
.rbc-time-content > .rbc-time-gutter {
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
}
.rbc-time-content > * + * > * {
  border-left: 1px solid #DDD;
}
.rbc-rtl .rbc-time-content > * + * > * {
  border-left-width: 0;
  border-right: 1px solid #DDD;
}
.rbc-time-content > .rbc-day-slot {
  width: 100%;
  -moz-user-select: none;
   -ms-user-select: none;
       user-select: none;
  -webkit-user-select: none;
}
.rbc-current-time-indicator {
  position: absolute;
  z-index: 1;
  left: 0;
  height: 1px;
  background-color: #74ad31;
  pointer-events: none;
}
.rbc-current-time-indicator::before {
  display: block;
  position: absolute;
  left: -3px;
  top: -3px;
  content: ' ';
  background-color: #74ad31;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
.rbc-rtl .rbc-current-time-indicator::before {
  left: 0;
  right: -3px;
}

`

export const custom = `
.rbc-time-header {
  display: none;
}
.rbc-day-slot .rbc-time-slot, .rbc-time-slot {
  border: none;
  background: ${colors.lighterGray};
}
.rbc-time-content > * + * > * {
  border-left: none;
}
.rbc-label {
  padding-top: 10px;
  color: ${colors.calendarText};
}
.rbc-timeslot-group {
  border-bottom: 1px solid ${colors.calendarBorder};
}
`
