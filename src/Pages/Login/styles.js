import { colors } from '../../theme/colors';

export default `
.cr-login-page {
  background: ${colors.gray};
  height: 100%;
  width: 100%;
  position: fixed;
}

.cr-login-page h3 {
  color: ${colors.white};
}

.cr-login-page .cr-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  margin: 100px auto;
}
`