import { colors } from '../../theme/colors';

export default `
.cr-login-page {
  background: ${colors.gray};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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