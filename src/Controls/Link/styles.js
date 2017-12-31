import { colors } from '../../theme/colors';

export default `
.cr-input {
  background: ${colors.lightGray};
  outline: none;
  border: none;
  padding: 0.75rem;
  width: 100%;
  margin-bottom: 0.75rem;
  color: ${colors.white};
}

.cr-input::placeholder {
  color: ${colors.white};
}
`
