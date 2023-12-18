import styled from '@emotion/styled'

export const Banner = styled.div`
  background: var(--black);
  padding: 80px 0 48px 0;

  .title {
    text-align: center;
    color: var(--main-blue);
    margin: 0;
  }

  .description {
    padding: 32px 0 64px 0;
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 120px 0 88px 0;
  }

`
