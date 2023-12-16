import Styled from '@emotion/styled';

export const StyledTitle = Styled.div`
  width: 100%;
  height: 100%;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 32px;
    padding: 0 20px;
    margin: 0px;
  }

  .-rb {
    display: inline-block;
    max-width: max-content;
    width: 100%;
}

.-rm {
    display: inline-block;
}

.-rg {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .word {
    grid-column: 1/-1;
    grid-row: 1/-1;
    margin-right: auto;
    margin-left: auto;
    animation: roll 8s ease 1s infinite backwards;
    color: var(--main-blue);
  }

  @media(min-width: 518px) {
    h2 {
        font-size: 40px;
    }
  }

  @media(min-width: 578px) {
    h2 {
        font-size: 48px;
    }
  }

  @media(min-width: 718px) {
    h2 {
        padding: 0 32px;
    }
  }

  @media (min-width: 768px) {
    h2 {
        font-size: 56px;
        padding: 0 96px;
    }
    .word {
        /* margin-left: auto; */
    }
  }

  @media (min-width: 1024px) {
    h2 {
        padding: 0;
    }
    .word {
      margin-left: 0;
    }
    .-rb {
        ::before {
        content: "i";
        color: black;
        }   
    }
  }

  @media (min-width: 1200px) {
    h2 {
        font-size: 64px;
    }
  }

  .word:nth-of-type(2) {
    animation-delay: 3s;
    opacity: 0;
  }
  .word:nth-of-type(3) {
    animation-delay: 5s;
    opacity: 0;
  }
  .word:nth-of-type(4) {
    animation-delay: 7s;
    opacity: 0;
  }

  @keyframes roll {
    0% {
      opacity: 0;
      transform: translate3d(0, -70%, 0);
    }
    2.5%,
    25% {
      opacity: 1;
      transform: translateZ(0);
    }
    27.5%,
    to {
      opacity: 0;
      transform: translate3d(0, 70%, 0);
    }
  }
`;