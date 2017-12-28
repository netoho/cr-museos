import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../theme/colors";

export default `
.cr-simple-select {
  display: flex;
  max-width: 11rem;
  width: 100%;
  flex-direction: column;
  font-size: 0.6875rem;
  position: relative;
}

.cr-simple-select-options {
  position: absolute;
  display: none;
  top: 100%;
  z-index: 1;
  background-color: ${styleGuideColors.slateGrey};
}

.cr-simple-select-options.cr-simple-select-show {
  display:block;
}

.cr-simple-select-option {
  color: ${colors.white};
  padding: 0.3125rem 0.625rem 0;
  min-height: 2.5rem;
  cursor: pointer;
}

.cr-simple-select-option:hover {
  background-color: ${styleGuideColors.indianRed};
}

.cr-simple-select-option.cr-simple-selected {
  display: block;
  background-color: ${styleGuideColors.slateGreyTwo};
}
`;
