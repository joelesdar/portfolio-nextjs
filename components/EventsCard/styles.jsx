import styled from '@emotion/styled'

export const CardContainer = styled.div`
  position: relative;
  min-width: 250px;
  width: 90%;
  height: 467px;
  margin: 0 5%;
`

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 9, 54, .45);
  box-sizing: border-box;
  color: var(--black);
  z-index: 1;
  border-radius: 16px;
  border: 2px solid var(--white);
  
  p {
    font-weight: 500;
  }
  
  .description-container {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 24px;
  }

  .card-title {
    color: var(--white);
    margin-bottom: 8px;
  }

  .card-text {
    color: var(--white);
    line-height: 1.2;
  }

  .card-link {
    background: var(--white);
    border: 2px solid var(--black);
    border-radius: 8px;
    padding: 8px 0;
    width: 100%;
    text-align: center;
    span {
      color: var(--black);
    }
    :hover {
      background: none;
      border: 2px solid var(--white);
      span {
        color: var(--white);
      }
    }
  }

`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
`;
