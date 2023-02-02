import Styled from '@emotion/styled'

export const StyledStudies = Styled.div`

padding: 48px 0;
background: var(--dark-blue);
overflow: hidden;

.study-block {
  padding-top: 16px;
  padding-bottom: 16px;
}

.career-title {
  color: var(--main-blue);
}

.institution {
  /* color: var(--main-blue); */
}

.logo {
  padding-top: 16px;
  text-align: center;
  img {
    height: auto;
    width: auto;
  }
}

.logo-university {
  max-height: 8rem;
}

.blockchain-section {
  padding: 2rem 0;
}                                                                

.image {
  margin: 0;
  position: relative;
  max-width: 800px;
  background: var(--main-blue);
  overflow: hidden;
  padding: 0;
  border: 3px solid var(--main-blue);
  border-radius: 20px;
  img {
      width: 100%;
      height: auto;
      object-fit: cover;
      opacity: 0.8;
  }

  img:hover {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
  }
}

`
