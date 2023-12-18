import Styled from '@emotion/styled'

export const StyledHeader = Styled.div`
  background-color: rgba(18, 18, 18, 0.75);
  backdrop-filter: blur(4px);
  font-size: 1.2rem;
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
      }
  }

  .menu {
      background-color: transparent;
      cursor: pointer;
      display: flex;
      padding: 0;
      height: 100%;
      width: 25px;
      @media (min-width: 992px) {
        display: none;
      }
  }

  .line {
      fill: none;
      stroke: #1c82f6;
      stroke-width: 6;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
          stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
  }

  .line2 {
      stroke-dasharray: 60 60;
      stroke-width: 6;
  }

  .line3 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
  }

  .opened .line1 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
  }

  .opened .line2 {
      stroke-dasharray: 1 60;
      stroke-dashoffset: -30;
      stroke-width: 6;
  }

  .opened .line3 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
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
