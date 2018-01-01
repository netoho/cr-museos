import calendar from "./Components/Calendar/styles";
import {
  custom as calendarCustom,
  event as calendarEventStyles
} from "./Components/Calendar/styles";
import collapsibleSection from "./Components/CollapsibleSection/styles";
import infoLegend from "./Components/InfoLegend/styles";
import table from "./Components/Table/styles";

import dashboard from "./Components/Layout/styles";
import pieChart from "./Components/PieChart/styles";
import navBar from "./Components/Layout/NavBar/styles";
import topMenu from "./Components/Layout/TopMenu/styles";
import topLeftMenu from "./Components/Layout/TopLeftMenu/styles";
import sideMenu from "./Components/Layout/SideMenu/styles";

import input from "./Controls/Input/styles";
import button from "./Controls/Button/styles";
import link from "./Controls/Link/styles";
import simpleSelect from "./Controls/SimpleSelect/styles";

import loginPage from "./Pages/Login/styles";
import directionPage from "./Pages/Direction/styles";
import indicatorsPage from "./Pages/Indicatiors/styles";

const row = `
.cr-row {
  display: flex;
  flex-wrap: wrap;
}

.cr-row > * {
  margin-right: 1rem;
  margin-top: 1rem;
}

.cr-row > *:last-child {
  margin: none;
}
`;

const a = `
a, a:hover, a:visited, a:active {
  text-decoration: none;
}
`;

export default `

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App * {
  margin: 0;
  padding: 0;
  font-family: 'Muli', sans-serif;
  box-sizing: border-box;
}

${row}

${a}

${calendar}
${calendarEventStyles}
${calendarCustom}
${collapsibleSection}
${infoLegend}
${table}


${loginPage}
${directionPage}
${indicatorsPage}


${input}
${button}
${link}
${simpleSelect}


${dashboard}
${pieChart}
${navBar}
${topMenu}
${topLeftMenu}
${sideMenu}
`;
