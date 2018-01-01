import { colors, shadeBlendConvert, styleGuideColors } from '../../theme/colors';

export default `
.cr-link {
  background: ${styleGuideColors.slateGreyTwo};
  padding: 0.5rem;
  font-size: 0.7rem;
  color: ${styleGuideColors.white};
  white-space: nowrap;
}

.cr-link:hover {
  background: ${styleGuideColors.milkChocolate};
}
`
