import styled from '@emotion/styled'

export const StyledCard = styled.div`
  
  .card {
    background-color: var(--dark-blue);
    border-radius: 20px;
    margin-top: 24px;
    border: 1px solid var(--white);
  }

  .card-body {
    height: 200px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .card-title {
    color: var(--yellow);
  }
  
  .card-text {
    color: var(--white);
  }
  
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    background-color: white;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
  }
  
  a {
    text-decoration: none;
  }
`
