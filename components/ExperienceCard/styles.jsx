import styled from "@emotion/styled"
import { motion } from "framer-motion";

export const StyledCard = styled(motion.div)`

  background: var(--black);
  border-radius: 20px;
  margin: 0;
  margin-bottom: 32px;

  h5 {
    a, span {
      text-align: center;
      font-size: 24px;
      padding: 16px;
      color: var(--yellow);
      display: block;
    }
  }

  .text-container {
    padding: 0px 16px 16px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 160px;
    margin: 0;
    padding: 0;
  }
  :hover {
    background: var(--intense-blue);
  }

  @media (min-width: 992px) {
    .title-container {
      max-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-container {
      position: relative;
      max-width: 240px;
      width: 100%;
      height: 200px;
      margin: 0;
    }
    .text-container {
      display: inline-flex;
      flex-direction: row;
      height: 100%;
      justify-content: center;
      align-items: center;
      padding: 0px;
      p {
        margin: 0;
      }
    }
  }
`

export const ImageContainer = styled.div`
  position: relative;
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
    background-color: rgba(12, 9, 54, .4);
    border-radius: 0 0 20px 20px;
    @media (min-width: 992px) {
      border-radius: 0 20px 20px 0;
    }
  }

  @media (min-width: 992px) {
    border-radius: 0 20px 20px 0;
  }

`;