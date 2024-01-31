import styled from '@emotion/styled'

export const StyledBanner = styled.section`

  background: var(--dark);
  padding: 160px 0 128px 0;

  .title {
    text-align: center;
    margin: 0;
    color: var(--main-blue);
  }

  .description {
    margin: 32px 0 64px 0;
  }

  .button {
    text-align: center;
  }

  .image {
    margin-top: 2em;
    margin-bottom: 2em;
    position: relative;
    max-width: 400px;
    background: var(--black);
    overflow: hidden;
    padding: 0;
    border: 3px solid var(--white);
    border-radius: 20px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: .9;
    }

    img:hover {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
  }

`


