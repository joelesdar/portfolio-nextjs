import Styled from '@emotion/styled'

export const StyledSocialBar = Styled.div`

  position: fixed;
  float: right;
  top: 50%;
  right: 0;
  max-width: 64px;
  -webkit-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
  z-index: 1;
  padding: 4px 0px;
  background: var(--dark);
  opacity: .75;
  backdrop-filter: blur(4px);
  overflow-x: hidden;
  border-radius: 8px 0px 0px 8px;
  
  .social-icon {
    display: inline-block;
    width: 100%;
    padding: 8px 0px;
    color: var(--white);
  }
  
  .social-icon:hover {
    color: var(--main-blue);
  }
  
`
