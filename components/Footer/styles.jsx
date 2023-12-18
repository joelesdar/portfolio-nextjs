import Styled from '@emotion/styled'

export const StyledFooter = Styled.div`

background: var(--dark);
text-align: center;
font-weight: 500;

.message {
    padding: 16px 0;
    p {
        margin: 0px;
        display: inline;
    }
    .react-icon {
        color: #00d8ff;
    }
    .bootstrap-icon {
        color: #593377;
    }
    .heart-icon {
        color: var(--main-blue);
    }
    .copyright {
        color: var(--main-blue);
    }
}

`
