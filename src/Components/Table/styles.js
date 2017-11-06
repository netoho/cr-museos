import { colors } from '../../theme/colors';

export default `
.cr-table {
  background-color: ${colors.lighterGray};
  border-collapse: collapse;
  font-size: 10px;
  color: ${colors.textColor};
  text-align: left;
  table-layout: fixed;
  width: 100%;
}

.cr-table td, .cr-table th {
  padding: 10px; 
  border-right: 1px solid ${colors.border};  
}

.cr-table td:last-child, .cr-table th:last-child { 
  border-right: none;
}

.cr-table th {
  padding-top: 20px;
}

.cr-table tr { 
  border-bottom: 1px solid ${colors.border};  
}

.cr-table tbody tr:last-child { 
  border-bottom: none;  
}

.cr-table th, .cr-table td {
  font-weight: normal;
  padding-left: 10px;
}
`;
