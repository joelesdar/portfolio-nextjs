import Styled from '@emotion/styled'

export const StyledSocialBar = Styled.div`

  position: fixed;
  float: right;
  top: 50%;
  right: 0;
  max-width: 80px;
  -webkit-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
  z-index: 1;
  padding: 4px 0px;
  background: var(--black);
  opacity: .9;
  backdrop-filter: blur(4px);
  overflow-x: hidden;
  border-radius: 8px 0px 0px 8px;
  
  .social-icon {
    display: inline-block;
    width: 100%;
    padding: 8px 0px;
  }
  
  .social-icon:hover {
    color: white;
  }
  
`
