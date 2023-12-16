import styled from "@emotion/styled"

export const StyledCard = styled.div`

  background: var(--black);
  border-radius: 20px;
  margin-bottom: 40px;

  .image-container {
    position: relative;
    width: 100%;
    height: 160px;
    margin: 0;
  }
  :hover {
    background: var(--intense-blue);
  }

  @media (min-width: 1280px) {
    .image-container {
      position: relative;
      max-width: 240px;
      width: 100%;
      height: 240px;
      margin: 0;
    }
  }
  
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 0 0 20px 20px;
  
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(12, 9, 54, .45);
    border-radius: 0 20px 20px 0;
  }

  @media (min-width: 1280px) {
    border-radius: 0 20px 20px 0;
  }

`;