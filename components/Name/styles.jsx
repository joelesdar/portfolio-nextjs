import Styled from '@emotion/styled'

export const StyledName = Styled.div`
/* @import url('https://fonts.googleapis.com/css?family=Raleway:400,800,900'); */

.styled-name-container {
    
}

.name-container {
    /* background: -webkit-linear-gradient(#ebece7, white);
    background: linear-gradient(#ebece7, white); */
    
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    /* font-family: "Raleway", sans-serif; */
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    /* display: flex; */
    /* align-items: center; */
  /* justify-content: center; */
    
    /* left: 50%;
    top: 50%; */
}

.title {
    font-weight: 600;
    color: transparent;
    font-size: 5rem;
    background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
    background-position: 40% 50%;
    -webkit-background-clip: text;
    /* position: relative; */
    text-align: center;
    line-height: 90px;
    letter-spacing: -8px;
}

.subtitle {
    display: block;
    text-align: center;
    text-transform: uppercase;
    padding-top: 10px;
    font-size: 30px;
}


@media (max-width: 575px) {
    .title {
        font-size: 4rem;
    }
    .subtitle {
        font-size: 24px;
    }
}
`
