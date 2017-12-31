import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../theme/colors";

export default `
.cr-info-legend {
  display: flex;
  background-color: ${styleGuideColors.whiteTwo};
  color: ${styleGuideColors.slateGreyTwo};
  font-size: 0.75rem;
  padding: 1rem 0.75rem;
  align-items: center;
}

.cr-info-legend .cr-info-legend-value {
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1.2rem;
}
`;

