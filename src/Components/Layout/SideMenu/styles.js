import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../../theme/colors";

export default `
.cr-side-menu {
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${styleGuideColors.deepBrown};
  color: ${colors.white};
  min-width: 11.625rem;
}

.cr-side-menu a, .cr-side-menu a:hover, .cr-side-menu a:visited {
  color: ${colors.white};
  text-decoration: none;
  font-size: 0.625rem;
}

.cr-side-menu .title {
  font-size: 0.5625rem;
	font-weight: 800;
}

.cr-side-menu .menu-wrapper {
	border-top: solid 1px ${styleGuideColors.charcoalGreyTwo};
	padding-left: 2rem;
	
}

.cr-side-menu .menu-wrapper:last-child {
}

.cr-side-menu .menu-wrapper > header {
  white-space: nowrap;
  writing-mode: sideways-lr;
  position: absolute;
  left: 0;
}

.cr-side-menu .menu {
  padding: 0;
  margin: 0;
  list-style: none;
}

.cr-side-menu .menu li > a {
  padding: 0.5rem 0;
}
`;
