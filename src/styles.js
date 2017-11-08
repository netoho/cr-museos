import calendar from './Components/Calendar/styles'
import {custom as calendarCustom, event as calendarEventStyles} from './Components/Calendar/styles'
import collapsibleSection from './Components/CollapsibleSection/styles'
import table from './Components/Table/styles'

import input from './Controls/Input/styles'
import button from './Controls/Button/styles'

import loginPage from './Pages/Login/styles'

export default `

.App * {
  margin: 0;
  padding: 0;
  font-family: 'Muli', sans-serif;
  box-sizing: border-box;
}

.App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
}

.App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
}

.App-title {
    font-size: 1.5em;
}

.App-intro {
    font-size: large;
}

@keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

${calendar}

${calendarEventStyles}

${calendarCustom}

${collapsibleSection}

${input}

${loginPage}

${button}

${table}
`
