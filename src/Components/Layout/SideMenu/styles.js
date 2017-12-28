import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../../theme/colors";

export default `
.cr-side-menu {
  display: flex;
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
	padding: 0.5rem 0;
}

.cr-side-menu .menu-wrapper {
	border-top: solid 1px ${styleGuideColors.charcoalGreyTwo};
	padding: 1rem 0 1rem 2rem;
	position: relative;
}

.cr-side-menu .menu-wrapper:last-child {
}

.cr-side-menu .menu-wrapper > header {
  white-space: nowrap;
  position: absolute;
  right: 42%;
  top: 50%;
  text-align: center;
  transform: rotate(-90deg);
  width: 100%;
}

.cr-side-menu .menu {
  padding: 0;
  margin: 0;
  list-style: none;
}

.cr-side-menu .menu li > a {
  padding: 0.5rem 0 0.5rem 0.5rem;
  display: block;
}
`;
