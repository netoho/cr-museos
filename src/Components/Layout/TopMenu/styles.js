import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../../theme/colors";

export default `
.cr-top-menu {
  display: flex;
  height: 7.5rem;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: ${styleGuideColors.slateGreyTwo};
  color: ${colors.white};
}

.cr-top-menu .menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  border-right: solid 1px ${styleGuideColors.slateGrey};
}

.cr-top-menu .menu:last-child {
  border: none;
}


.cr-top-menu .menu > ul {
  display: flex;
  list-style: none;
  flex-direction: row;
  font-size: 0.625rem;
  justify-content: space-evenly;
}

.cr-top-menu .menu > ul > li {
  transform: rotate(180deg);
  writing-mode: tb;
  flex: 1;
  display: flex;
  height: 5.5rem;
  min-width: 0;
  border-left: solid 1px ${styleGuideColors.slateGrey};
}

.cr-top-menu .menu > ul > li:last-child {
  border: none;
}

.cr-top-menu .menu > ul > li > a {
  color: ${colors.white};
  text-decoration: none;
  display: inline-table;
  height: 100%;
  padding-top: 1rem;
  margin: auto auto;
}

.cr-top-menu .menu > ul > li:hover {
  background-color: ${styleGuideColors.milkChocolate};
}

.cr-top-menu .menu > header {
  font-weight: 600;
  text-align: center;
  font-size: 0.625rem;
  font-family: 'Open Sans';
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cr-top-menu .menu > header:hover {
  background-color: ${styleGuideColors.slateGrey};
}
`;

