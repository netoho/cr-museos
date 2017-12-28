import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../../theme/colors";

export default `
.cr-top-menu {
  display: flex;
  height: 12rem;
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
  border-right: solid 1px ${styleGuideColors.charcoalGreyTwo};
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
  width: 1.5rem;
  white-space: nowrap;
  transform: translateY(-100%) rotate(-90deg);
}

.cr-top-menu .menu > ul > li > a {
  color: ${colors.white};
  text-decoration: none;
  min-width: 8rem;
  display: block;
}

.cr-top-menu .menu > .ul > .li > a:hover {
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

const lol = `
  transform: translateY(-100%) rotate(-90deg);
`;
