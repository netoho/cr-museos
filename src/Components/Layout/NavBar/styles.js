import { colors, styleGuideColors, shadeBlendConvert } from '../../../theme/colors';

export default `
.cr-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
}
.cr-nav-bar > section {
  display: flex;
  align-items: center;
}

.cr-nav-bar .logo {
  font-size: 1rem;
	font-weight: 800;
	color: ${styleGuideColors.indianRed};
	margin-right: 3rem;
}
.cr-nav-bar .name {
	font-size: 0.75rem;
	color: ${styleGuideColors.charcoalGrey};
}

.cr-nav-bar .menu, .cr-nav-bar .profile {
  display: inline-flex;
  align-items: center;
}

.cr-nav-bar .menu {
  
  list-style: none;
  padding: 0;
}
.cr-nav-bar .menu > li {
  font-size: 0.625rem;
	font-weight: 300;
	margin-right: 2rem;
}

.cr-nav-bar .profile .img {
  width: 1.25rem;
  height: 1.25rem;
  background-color: gray;
  border-radius: 50%;
  margin-left: 1rem;
}
`