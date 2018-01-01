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
  flex: 1;
  background-color: ${styleGuideColors.slateGreyTwo};
  color: ${colors.white};
}

.cr-top-menu .menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  border-right: solid 1px ${styleGuideColors.slateGrey};
}

.cr-top-menu .menu:last-child {
  border: none;
}


.cr-top-menu .menu > ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.625rem;
  justify-content: space-evenly;
}

.cr-top-menu .menu > ul > li {
  transform: rotate(-90deg);
  display: inline-block;
  /* width: calc((100vw - 11.625rem) / 22);  Number of menus */
  min-width: 0;
  flex: 1;
  border-left: solid 1px ${styleGuideColors.slateGrey};
}

.cr-top-menu .menu > ul > li:last-child {
  /*border: none;*/
}

.cr-top-menu .menu > ul > li > a {
  font-size: 0.58rem;
  color: ${colors.white};
  text-decoration: none;
  overflow: visible;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: red;
}

.cr-top-menu .menu > ul > li:hover {
  background-color: ${styleGuideColors.milkChocolate};
}

.cr-top-menu .menu > header {
  font-weight: 600;
  text-align: center;
  font-size: 0.625rem;
  font-family: 'Open Sans', sans-serif;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cr-top-menu .menu > header:hover {
  background-color: ${styleGuideColors.slateGrey};
}
`;

