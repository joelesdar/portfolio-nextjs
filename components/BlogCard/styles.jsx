import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const StyledCard = styled(motion.div)`

  margin-bottom: 32px;
  
  .card {
    background-color: var(--black);
    border-radius: 20px;
    border: 2px solid var(--white);

    :hover {
      background: var(--intense-blue);
    }

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
    margin-top: 15px;
  }
  
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    background-color: white;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
  }

`
