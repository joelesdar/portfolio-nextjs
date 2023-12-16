import styled from '@emotion/styled'

export const StyledBanner = styled.div`

  .title {
    margin-top: 160px;
    margin-bottom: 56px;
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

  .second-image {
    max-width: 600px;
  }

  .main-description {
    border: 3px solid var(--white);
    border-radius: 20px;
}

`


