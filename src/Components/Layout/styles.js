import { styleGuideColors } from '../../theme/colors';

export default `
.cr-dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${styleGuideColors.whiteTwo};
  padding: 1rem;
}

.cr-dashboard .content {
  display: flex;
}

.cr-dashboard .content > main {
  width: 100%;
}
`;
