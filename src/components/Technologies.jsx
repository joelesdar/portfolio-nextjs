import React from 'react'
import Styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { Rotate, Fade } from 'react-reveal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './icons/logo.png'

const StyledTechnologies = Styled.div`

background: #0E141B;
padding: 48px 0;

.orbit {
  float: left;
  width: 100%;
}

.orbit-icon {
  width: 2em;
  height: 2em;
  line-height: 2em;
  font-size: 20px;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
  text-align: center;
  display: block;
}

.orbit-wrap {
  height: 20em;
  list-style: none;
  font-size: 1.3em;
  margin: 0px;
}
.orbit-wrap > li {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
.orbit-wrap > li:hover ul {
  border-width: 2px;
  border-color: #fff;
}
.orbit-wrap > li:hover ~ li ul {
  border-color: rgba(255, 255, 255, 0.2);
}
.orbit-wrap > li:hover ~ li ul li {
  opacity: 0.4;
}

ul[class^=ring] {
  transition: all 300ms ease-in-out;
}
ul[class^=ring] li {
  transition: all 300ms ease-in-out;
}

.ring-1 {
  width: 19em;
  height: 19em;
  -webkit-animation: clockwiseRotate 30s linear infinite;
          animation: clockwiseRotate 30s linear infinite;
}
.ring-1 i {
  -webkit-animation: counterClockwiseRotate 30s linear infinite;
          animation: counterClockwiseRotate 30s linear infinite;
}

.ring-1 > *:nth-of-type(1) {
  transform: rotate(72deg) translate(9.5em) rotate(-72deg);
}

.ring-1 > *:nth-of-type(2) {
  transform: rotate(144deg) translate(9.5em) rotate(-144deg);
}

.ring-1 > *:nth-of-type(3) {
  transform: rotate(216deg) translate(9.5em) rotate(-216deg);
}

.ring-1 > *:nth-of-type(4) {
  transform: rotate(288deg) translate(9.5em) rotate(-288deg);
}

.ring-1 > *:nth-of-type(5) {
  transform: rotate(360deg) translate(9.5em) rotate(-360deg);
}
.ring-2 {
  width: 13em;
  height: 13em;
  -webkit-animation: clockwiseRotate 25s linear infinite;
          animation: clockwiseRotate 25s linear infinite;
}
.ring-2 i {
  -webkit-animation: counterClockwiseRotate 25s linear infinite;
          animation: counterClockwiseRotate 25s linear infinite;
}

.ring-2 > *:nth-of-type(1) {
  transform: rotate(60deg) translate(6.5em) rotate(-60deg);
}

.ring-2 > *:nth-of-type(2) {
  transform: rotate(120deg) translate(6.5em) rotate(-120deg);
}

.ring-2 > *:nth-of-type(3) {
  transform: rotate(180deg) translate(6.5em) rotate(-180deg);
}

.ring-2 > *:nth-of-type(4) {
  transform: rotate(240deg) translate(6.5em) rotate(-240deg);
}

.ring-2 > *:nth-of-type(5) {
  transform: rotate(300deg) translate(6.5em) rotate(-300deg);
}

.ring-2 > *:nth-of-type(6) {
  transform: rotate(360deg) translate(6.5em) rotate(-360deg);
}

.ring-3 {
  width: 7em;
  height: 7em;
  -webkit-animation: clockwiseRotate 20s linear infinite;
          animation: clockwiseRotate 20s linear infinite;
}
.ring-3 i {
  -webkit-animation: counterClockwiseRotate 20s linear infinite;
          animation: counterClockwiseRotate 20s linear infinite;
}

.ring-3 > *:nth-of-type(1) {
  transform: rotate(126.6666666667deg) translate(3.5em) rotate(-126.6666666667deg);
}

.ring-3 > *:nth-of-type(2) {
  transform: rotate(253.3333333333deg) translate(3.5em) rotate(-253.3333333333deg);
}

.ring-3 > *:nth-of-type(3) {
  transform: rotate(380deg) translate(3.5em) rotate(-380deg);
}

ul[class^=ring] {
  border: solid 1px rgba(33, 150, 243, 0.8);
  position: relative;
  padding: 0;
  border-radius: 50%;
  list-style: none;
  box-sizing: content-box;
}

ul[class^=ring] li {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6em;
  height: 1.6em;
  margin: -0.8em;
}

/*
  center;
*/
.orbit-center {
  z-index: 5;
  font-size: 35px;
  width: 1.8em;
  height: 1.8em;
  text-align: center;
  background: var(--dark-blue);
  border-radius: 50%;
}

.orbit-center:hover .orbit-center__icon {
  transform: rotateZ(0deg);
}

.orbit-center__icon {
  transform: rotateZ(-360deg);
  transition: all 300ms ease-in-out;
}

.orbit-wrap > li.orbit-center:hover ~ li > ul {
  width: 0;
  height: 0;
}
.orbit-wrap > li.orbit-center:hover ~ li > ul * {
  transform: translate(0, 0);
}

/* animations */
@-webkit-keyframes clockwiseRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes clockwiseRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes counterClockwiseRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes counterClockwiseRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

/* Media queries */

/* Small */
@media (max-width: 576px) {
  .orbit-wrap {
    font-size: 1em;
  }

  .orbit-center {
    font-size: 25px;
  }

  .orbit-icon {
    font-size: 18px;
  }
}

/* icons */

/* ring 3 */
.css-icon {
  background: #008EC6;
  color: white;
}

.html-icon {
  background: #e34f26;
  color: white;
}

.bootstrap-icon {
  background: white;
  color: #593377;
}

/* ring 2 */
.react-icon {
  background: black;
  color: #00d8ff;
}

.js-icon {
  background: black;
  color: #f7df1e;
}

.php-icon {
  background: #8892be;
  color: black;
}

.java-icon {
  background: #ED1A20;
  color: white;
}

.git-icon {
  background: #DA3F1B;
  color: white;
}

.database-icon {
  background: #0abf53;
  color: white;
}

.wordpress-icon {
  background: #0087be;
  color: white;
}

/* ring 1 */
.cloud-icon {
  background: #4285f4;
  color: white;
}

.windows-icon {
  background: #ea3e23;
  color: white;
}

.dialogflow-icon {
  background: #ea3e23;
  color: white;
}

.figma-icon {
  background: #1E1E1E;
  color: white;
  line-height: 1.8em;
  img {
    width: 70%;
  }
}

.photoshop-icon {
  background: #001C24;
  color: white;
  line-height: 1.8em;
  img {
    width: 80%;
  }
}

.logo {
  img {
    width: 100%;
  }
}

.title-technologies {
  color: var(--main-blue);
}

ul.tech-list {
li {
  list-style: none;
  position: relative;
  padding: 0 0 0 16px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 6px solid var(--main-blue);
    transform: rotate(90deg);
  }
}
}

}
`

const Technologies = () => {
  const { t } = useTranslation()

  return (
    <StyledTechnologies>
      <div className='container-fluid' id='technologies'>
        <div className='row justify-content-around align-items-center'>
          <Rotate duration='2000'>
            <div className='col-12 col-md-7 col-lg-6'>
              <div class='orbit'>
                <ul class='orbit-wrap'>
                  <li class='orbit-center'>
                    <i class='orbit-center__icon logo'>
                      <img src={logo} alt='Logo' />
                    </i>
                  </li>
                  <li>
                    <ul class='ring-1'>
                      <li>
                        <i class='orbit-icon cloud-icon'>
                          <FontAwesomeIcon
                            icon={['fas', 'cloud']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon windows-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'windows']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon dialogflow-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'bots']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon figma-icon'>
                          <img src='https://img.icons8.com/color/48/000000/figma--v1.png' />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon photoshop-icon'>
                          <img src='https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png' />
                        </i>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class='ring-2'>
                      <li>
                        <i class='orbit-icon react-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'react']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon js-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'js-square']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon java-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'java']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon git-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'git-alt']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon database-icon'>
                          <FontAwesomeIcon
                            icon={['fas', 'database']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon wordpress-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'wordpress']}
                            size='lg'
                          />
                        </i>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class='ring-3'>
                      <li>
                        <i class='orbit-icon css-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'css3']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon html-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'html5']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon bootstrap-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'bootstrap']}
                            size='lg'
                          />
                        </i>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Rotate>
          <Fade right duration='2000'>
            <div className='col-12 col-md-5 col-lg-6'>
              <div className='row justify-content-center'>
                <div className='col-10'>
                  <h2 className='title-technologies'>
                    {t('title-technologies')}
                  </h2>
                  <p>{t('description-technologies')}</p>
                </div>
                <div className='col-5'>
                  <p>{t('description-specialized-technologies')}</p>
                  <ul className='tech-list'>
                    <li>Git, Github</li>
                    <li>HTML5, CSS3</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Wordpress</li>
                    <li>React.js</li>
                    <li>Solidity</li>
                    <li>Photoshop</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className='col-5'>
                  <p>{t('description-more-technologies')}</p>
                  <ul className='tech-list'>
                    <li>MySQL, SQL</li>
                    <li>Google Cloud</li>
                    <li>Microsoft Office</li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </StyledTechnologies>
  )
}

export default Technologies
