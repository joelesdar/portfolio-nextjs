import React from 'react';
import Styled from '@emotion/styled';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledName = Styled.div`
@import url(https://fonts.googleapis.com/css?family=Raleway:400,,800,900);

.styled-name-container {
    
}

.name-container {
    /* background: -webkit-linear-gradient(#ebece7, white);
    background: linear-gradient(#ebece7, white); */
    
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: "Raleway", sans-serif;
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
    font-weight: 700;
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
`;

const Name = () => {

    $(document).ready(function(){
        var mouseX, mouseY;
        var traX, traY;
        $(document).mousemove(function(e){
            mouseX = e.pageX;
            mouseY = e.pageY;
            traX = ((4 * mouseX) / 570) + 40;
            traY = ((4 * mouseY) / 570) + 50;
            console.log(traX);
            $(".title").css({"background-position": traX + "%" + traY + "%"});
        });
    });

    return (
        <StyledName>
            <div className="styled-name-container">
                <div className="name-container">
                    <div className="title">Joel Esteban Diaz Arévalo</div>
                    <div className="subtitle"> Desarrollador Web Mamerto </div>
                </div>
            </div>
        </StyledName>
    );
}
 
export default Name;