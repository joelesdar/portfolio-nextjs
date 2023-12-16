import { StyledWelcome } from './styles'
import { Title } from '../Title'

export const Welcome = () => {
  return (
    <StyledWelcome>
      <div className='stars-container'>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <Title />
      </div>
    </StyledWelcome>
  )
}
