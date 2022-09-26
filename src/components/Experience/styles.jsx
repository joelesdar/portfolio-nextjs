import Styled from '@emotion/styled'

export const StyledExperience = Styled.div`

padding: 48px 0;
background: var(--black);

.title {
  color: var(--main-blue);
  text-align: center;
}

.experience-board {
  margin-top: 24px;
}

.list-group {
  border-radius: 0px;
}

.list-group-item {
  background: rgba(0,0,0,0);
  border: none;
  padding: 8px 0;
  text-align: center;
  display: inline;
}

.list-group-item.active {
  background: var(--dark-blue);
  border-left: 2px solid var(--green-blue);
}

.job-title {
  color: var(--green-blue);
}
.date-subtitle {
  color: var(--main-blue);
}

ul.resp-list {
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

@media (max-width: 767px) {
  .list-group {
    flex-direction: row;
  }
  .list-group-item.active {
    border-top: 2px solid var(--green-blue);
    border-left: none;
  }
  .tab-content {
    margin-top: 24px;
  }
  .job-title {
    text-align: center;
  }
  .date-subtitle {
    text-align: center;
  }
}

`
