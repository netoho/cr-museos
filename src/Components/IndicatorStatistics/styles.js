import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../theme/colors";

export default `
.cr-info-indicator-statistics {
  display: flex;
  flex-direction: column;
  background-color: ${styleGuideColors.whiteTwo};
  color: ${styleGuideColors.slateGrey};
  width: 100%;
}

.cr-info-indicator-statistics > * {
  border-bottom: 1px solid ${styleGuideColors.whiteThree};
  padding: 0 0.5rem;
}
.cr-info-indicator-statistics .cr-info-indicator-statistics-td-right {
  text-align: right;
  padding-right: 0.75rem;
}

.cr-info-indicator-statistics > *:last-child {
  border-bottom: none;
}

.cr-info-indicator-statistics-total {
  font-size: 0.625rem;
  font-weight: bold;
  display: flex;
  height: 2.4rem;
  align-items: center;
  justify-content: center;
}
.cr-info-indicator-statistics-total > span {
  font-size: 0.875rem;
  font-weight: 800;
  color: ${styleGuideColors.indianRed};
  margin-right: 1rem;
}

.cr-info-indicator-statistics-details {
  font-size: 0.625rem;
  font-weight: 300;
  display: flex;
  height: 4.25rem;
  align-items: center;
  justify-content: center;
}

.cr-info-indicator-statistics-overview > p {
  font-size: 0.4375rem;
  font-weight: 300;
  padding: 0.5rem 0;
  text-align: center;
}

.cr-info-indicator-statistics-links {
  color: ${styleGuideColors.indianRed};
  font-size: 0.5rem;
  font-weight: 300;
  padding: 1rem;
  text-align: center;
}

`;

