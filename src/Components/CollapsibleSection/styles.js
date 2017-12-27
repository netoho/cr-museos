import { colors } from '../../theme/colors';

export default `
.Collapsible {
  width: 100%;
}
.Collapsible .title {
  background-color: ${colors.gray};
  font-size: 12px;
  color: white;
  text-align: left;
  padding: 10px;
  cursor: pointer;
}
.Collapsible .close {
  color: ${colors.lightGray};
  float: right;
}
`;
