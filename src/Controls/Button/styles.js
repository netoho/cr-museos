import { colors, shadeBlendConvert } from '../../theme/colors';

export default `
.cr-button {
  outline: none;
  border: none;
  padding: 0.75rem;
  width: 100%;
  margin-bottom: 0.75rem;
  cursor: pointer;
}

.cr-button.primary {
  background: ${colors.primary};
  color: ${colors.white};
}

.cr-button.primary:hover {
  background: ${shadeBlendConvert(0.1, colors.primary)};
}

`
