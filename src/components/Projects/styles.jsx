import Styled from '@emotion/styled'

export const StyledProjects = Styled.div`

padding: 48px 0;
background: var(--dark-blue);

.title {
    text-align: center;
}

.btn-primary {
  background-color: var(--intense-blue);
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
  color: var(--intense-blue);
  margin: 24px 8px;
}

`