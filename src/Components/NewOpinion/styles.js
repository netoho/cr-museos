import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../theme/colors";

export default `
.cr-new-opinion header {
  font-size: 0.75rem;
  color: ${styleGuideColors.slateGreyTwo};
  font-weight: 300;
  text-align: left;
  max-width: 6.25rem;
}

.cr-new-opinion td, .cr-new-opinion th {
  border-right: none;
  padding-top: 10px;
}

.cr-new-opinion .cr-new-opinion-header {
  width: 6.25rem;
}

.cr-new-opinion .cr-new-opinion-content {
  display: flex;
}

.cr-new-opinion .cr-new-opinion-content > *:first-child {
  margin-right: 1rem;
}

.cr-new-opinion .cr-new-opinion-types > label, .cr-new-opinion .cr-new-opinion-send-to > label {
  margin-right: 2rem;
}

.cr-new-opinion .cr-new-opinion-types > label > input, .cr-new-opinion .cr-new-opinion-send-to > label > input {
  margin-right: 0.5rem;
}

.cr-new-opinion .cr-new-opinion-ccp {
  display: flex;
  flex-direction: column;
}

.cr-new-opinion .cr-new-opinion-ccp header {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.cr-new-opinion .cr-new-opinion-ccp label {
  margin-bottom: 0.25rem;
}

.cr-new-opinion-ccp-td {
  vertical-align: top;
}


`;
