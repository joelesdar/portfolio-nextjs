import Styled from '@emotion/styled'

export const ContactContainer = Styled.div`

  padding: 48px 0;
  background: var(--black);

  .title {
    color: var(--white);
    text-align: center;
  }
  .social {
    text-align: center;
  }
  .social-icon:hover {
    color: white;
  }
  .find-me {
    font-size: 1.6rem;
    padding: 16px 16px 32px 16px;
    p {
      padding: 0;
      margin: 0;
    }
  }

  .at {
    color: var(--yellow);
    font-size: 2rem;
  }

  .btn-primary {
    background-color: var(--black);
    padding: 8px 32px;
    border-radius: 8px;
    color: var(--yellow);
    margin: 32px 8px;
    border: 2px solid var(--yellow);
    font-weight: 500;
  }

  .btn-primary:hover {
    border-radius: 8px;
    border: 2px solid var(--white);
    color: var(--white);
  }

  .mail {
    color: var(--white);
  }

`
