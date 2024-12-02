import styled from '@emotion/styled';
// import Link from 'next/link';

export const CardContainer = styled.div`
  position: relative;
  min-width: 250px;
  width: 90%;
  height: 467px;
  margin: 0 5%;
  overflow: hidden;
  border-radius: 16px;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 9, 54, 0.55);
  box-sizing: border-box;
  color: var(--black);
  z-index: 1;
  border-radius: 16px;
  border: 2px solid var(--white);
  overflow: hidden;

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
    color: var(--yellow);
    margin-bottom: 8px;
  }

  .card-text {
    color: var(--white);
    line-height: 1.2;
  }

  .card-buttons {
    display: flex;
    justify-content: space-between;
    a {
      width: 100%;
    }
    .two-buttons {
        width: 49%;
    }
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
      border: 2px solid var(--yellow);
      
      span {
        color: var(--yellow);
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
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    opacity: 0.9;
    transition: transform 0.3s ease;
  }

  ${CardContainer}:hover & .image {
    transform: scale(1.1);
  }
`;