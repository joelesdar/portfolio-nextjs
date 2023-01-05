import { StyledWelcome } from './styles'
import { Name } from '../Name'

export const Welcome = () => {
  return (
    <StyledWelcome>
      <div className='stars-container'>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <div id='title'>
          <Name />
        </div>
      </div>
    </StyledWelcome>
  )
}
