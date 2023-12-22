import Styled from '@emotion/styled'

export const StyledProject = Styled.div`

margin-bottom: 32px;

.card {
    background: var(--black);
    color: var(--white);
    padding: 0;
    border-radius: 20px;
    border: 2px solid var(--white);
    img {
        border-radius: 20px 20px 0 0;
        margin: 0 auto;
        object-fit: cover;
        opacity: 0.6;
        height: auto;
    }

    img:hover {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
}

.card-title {
    color: var(--yellow);
}

.libraries {
  /* margin: 0; */
  p {
    color: var(--white);
    font-size: 12px;
  }
}

.icon {
  padding-left: 16px;
}

.icon:hover {
  color: white;
}

`
