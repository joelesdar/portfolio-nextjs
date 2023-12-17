import Styled from '@emotion/styled'

export const DescriptionContainer = Styled.div`

  padding: 160px 0 80px 0;
  background-color: var(--dark);
  overflow: hidden;
  border-top: 3px solid var(--white);

.image {
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
        object-fit: cover;
        background-position: center;
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


.full-description {
  margin-top: 40px;
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
