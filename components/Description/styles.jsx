import Styled from '@emotion/styled'

export const DescriptionContainer = Styled.div`

  padding: 80px 0;
  background-color: var(--dark);
  overflow: hidden;
  border-top: ${(props) => props.topBorder ? '3px solid var(--white)' : ''};

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
    border: 3px solid var(--white);
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

  .tags {
    margin: 0;
    p {
      background: var(--dark);
      color: var(--yellow);
      border-radius: 8px;
      border: 2px solid var(--yellow);
      padding: 4px;
      font-size: 12px;
      margin-left: 8px; 
    }
  }

  @media (min-width: 768px) {
    padding: 120px 0;
  }

`
