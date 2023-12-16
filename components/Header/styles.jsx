import Styled from '@emotion/styled'

export const StyledHeader = Styled.div`
  background-color: rgba(18, 18, 18, 0.75);
  backdrop-filter: blur(4px);
  font-size: 1.2rem;
  fill: red;
  min-height: 5rem;
  color: white;
  
  .navbar {
      text-align: center;
      padding: 1rem;
      margin: 0 3rem;
      a {
          color: white;
          &:after {
            margin-bottom: -3px;
          }
        }
        .navbar-nav {
          a {
          font-weight: 500;
          color: white;
          text-decoration: none;
          &:hover {
            color: var(--main-blue);
          }
          &:focus {
            color: white;
          }
        }
        .active {
          color: white;
        }
        .show{
          background-color: transparent;
          color: var(--main-blue);
        }
        .dropdown-menu {
          text-align: center;
            left: -25%;
            background: rgba(18, 18, 18, 0.75);
          }
          .nav-link.show {
            color: var(--main-blue);
          }
        }  
      .navbar-toggler {
        border: none;
        padding: 0;
        :focus {
          /* border: none;
          background: red; */
        }
      }
  }

  .container-logo {
      max-width: 50px;
      img {
          margin: 0 auto;
          width: 100%;
          height: auto;
      }
  }

  svg {
      width: 25px;
      margin: 0 auto;
  }
`
