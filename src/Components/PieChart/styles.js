import { styleGuideColors } from '../../theme/colors';

export default `
.cr-pie-chart {
  width: 100%;
  background-color: ${styleGuideColors.whiteTwo};
}

.cr-pie-chart-container {
  padding: 0.75rem;
  position: relative;
}

.cr-pie-chart > header {
  border-bottom: 1px solid ${styleGuideColors.whiteThree};
  font-size: 0.75rem;
  font-weight: bold;
  color: ${styleGuideColors.slateGreyTwo};
  padding: 0.75rem;
}

.cr-pie-chart .cr-pie-percentage {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 300;
  color: ${styleGuideColors.slateGreyTwo};
}

.cr-pie-chart .cr-pie-percentage > span {
  font-size: 1.5rem;
  font-weight: bold;
  color: ${styleGuideColors.emeraldGreen};
  margin-left: 1.5rem;
}

.cr-pie-info > header {
  font-size: 0.75rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.cr-pie-serie-statistic {
  font-size: 0.5rem;
  font-weight: 300; 
}

.cr-pie-serie-total, .cr-pie-serie-statistic > span {
  font-weight: bold;
}
`;
