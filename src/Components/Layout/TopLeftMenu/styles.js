import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../../theme/colors";

export default `
.cr-top-left-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${styleGuideColors.charcoalGrey};
  color: ${colors.white};
  flex: 0 0 11.625rem;
  padding: 0.625rem 0.75rem;
}

.cr-top-left-menu > header {
  font-size: 0.875rem;
}

.cr-top-left-menu > .info > .circle {
  background-color: ${styleGuideColors.blackTwo};
  width: 0.5625rem;
  height: 0.5625rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 0.25rem;
}

.cr-top-left-menu > .info > .circle > .small-circle {
  width: 0.3125rem;
  height: 0.3125rem;
  display: block;
  border-radius: 50%;
  background-color: ${styleGuideColors.emeraldGreen};
}

.cr-top-left-menu > .info {
  font-size: 0.5625rem;
  display: flex;
  align-items: center;
}

.cr-top-left-menu > hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${styleGuideColors.charcoalGreyTwo};
  background-color: ${styleGuideColors.charcoalGreyTwo};
  padding: 0; 
}

.cr-top-left-menu > .notifications {
  min-width: 0;
}

.cr-top-left-menu > .notifications > p.notification {
  font-size: 0.5625rem;
  color: ${styleGuideColors.pinkishGrey};
  background-color: ${styleGuideColors.charcoalGreyThree};
  padding: 0.25rem 0.5rem;
  margin-top: 0.25rem;
  white-space: nowrap;
  max-width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cr-top-left-menu > .notifications > p:first-child {
  font-size: 0.4375rem;
  color: ${styleGuideColors.coolGrey};
}


`;
