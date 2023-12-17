import styled from '@emotion/styled'

export const StyledCard = styled.div`

  margin-bottom: 32px;
  
  .card {
    background-color: var(--black);
    border-radius: 20px;
    border: 2px solid var(--white);
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
