import Styled from '@emotion/styled'

export const StyledPost = Styled.div`

  background: var(--dark-blue);

  .post-cover {
    width: 100%;
    height: 400px;
    background: url(${(props) => props.imgUrl});  
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;

    .cover {
      height: 100%;
      width: 100%;
      background-color: var(--dark-blue);
      opacity: .6;
      overflow: hidden;
    }

    h1 {
      position: absolute;
      font-size: 2.4rem;
      padding: 0 10%;
      /* font-family: 'Rubik'; */
      font-weight: 500;
      color: var(--white);
    }
  }

  .post-body {
    padding: 80px 0px;
    /* background: #000; */
  }

`
