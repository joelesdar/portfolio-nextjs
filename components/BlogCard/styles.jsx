import styled from '@emotion/styled'

export const StyledCard = styled.div`
  
  .card {
    background-color: var(--main-blue);
    /* height: 500px; */
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
  }
  
  a {
    text-decoration: none;
  }
`
