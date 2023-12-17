import Styled from '@emotion/styled'

export const StyledProject = Styled.div`

margin-bottom: 32px;

.card {
    background: var(--black);
    color: var(--white);
    padding: 0;
    border-radius: 20px;
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

.card-body {
  border-top: 3px solid var(--green-blue);
}

.card-title {
    color: var(--green-blue);
}

.libraries {
  color: var(--main-blue);
}

.icon {
  padding-left: 16px;
}

.icon:hover {
  color: white;
}

`
