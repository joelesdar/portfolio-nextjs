import Styled from '@emotion/styled'

export const StyledHeader = Styled.div`
background-color: rgba(18, 18, 18, 0.75);
backdrop-filter: blur(4px);
font-size: 1.2rem;
fill: none;
min-height: 5rem;
.navbar {
    padding: 1rem;
    margin: 0 3rem;
    a {
        color: white;
    }
    .navbar-nav {
      a {
        color: white;
        text-align: center;
        &:hover {
          color: var(--main-blue);
        }
      }
      .active {
        color: var(--main-blue);
      }
      .show{
        background-color: transparent;
      }
      .dropdown-menu {
          left: -25%;
          background: rgba(18, 18, 18, 0.75);
        }
    }  
}
.container-logo {
    max-width: 50px;
    img {
        margin: 0 auto;
        width: 100%;
    }
}
svg {
    width: 25px;
    margin: 0 auto;
}
`
