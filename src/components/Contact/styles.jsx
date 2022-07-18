import React from 'react'
import Styled from '@emotion/styled'

export const ContactContainer = Styled.div`

padding: 48px 0;
background: var(--black);

.title {
  color: var(--green-blue);
  text-align: center;
}
.social {
  text-align: center;
}
.social-icon:hover {
  color: white;
}
.find-me {
  font-size: 1.6rem;
  padding: 16px;
  p {
    padding: 0;
    margin: 0;
  }
}

.at {
  color: var(--yellow);
  font-size: 2rem;
}

.btn-primary {
  background-color: var(--black);
  /* padding: 8px; */
  border-radius: 8px;
  color: var(--green-blue);
  margin: 24px 8px;
  border: 1px solid var(--green-blue);
}

.btn-primary:hover {
  background-color: var(--green-blue);
  border-radius: 8px;
  border: 1px solid var(--main-blue);
  color: var(--black);
  margin: 24px 8px;
}

.mail {
  color: var(--green-blue);
}

`
