import Styled from '@emotion/styled'

export const DescriptionContainer = Styled.div`

  padding: 80px 0;
  background-color: var(--dark);
  font-family: 'Rubik', sans-serif;
  overflow: hidden;
  border-top: 3px solid var(--white);

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

.full-description {
    border: 3px solid var(--white);
    border-radius: 20px;
}

.title-description {
  padding: 8px 0px 0px 8px;
}
.title-hello {
  color: var(--main-blue);
}

.description {
  padding: 8px;
}

`
