import Styled from '@emotion/styled'

export const DescriptionContainer = Styled.div`

  padding: 48px 0;
  background-color: var(--dark-blue);
  font-family: 'Rubik', sans-serif;
  overflow: hidden;

.image {
    margin-top: 2em;
    margin-bottom: 2em;
    position: relative;
    max-width: 400px;
    background: var(--main-blue);
    overflow: hidden;
    padding: 0;
    border: 3px solid var(--main-blue);
    border-radius: 20px;
    img {
        width: 100%;
        object-fit: cover;
        opacity: 0.6;
    }

    img:hover {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
}

.personal-description {
    border: 3px solid var(--main-blue);
    border-radius: 20px;
}

.title-description {
  padding: 8px 0px 0px 8px;
}
.title-hello {
  color: var(--yellow);
}

.description {
  padding: 8px;
}

`
