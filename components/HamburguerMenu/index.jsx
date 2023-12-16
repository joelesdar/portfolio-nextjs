import { useState } from 'react'
import HamburguerIcon from '../../assets/HamburguerIcon'
import { StyledHamburguerMenu } from './styles'

export const HamburguerMenu = () => {
  // State for animating the burguer menu
  const [menuAnimation, changeMenuAnimation] = useState(false);

  return (
    <StyledHamburguerMenu
    className={menuAnimation ? 'menu navbar-toggler opened' : 'menu navbar-toggler'}
        id='idMenu'
        onClick={() => changeMenuAnimation(!menuAnimation)}
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo02'
        aria-label='Main Menu'>
        <HamburguerIcon />
    </StyledHamburguerMenu>
  )
}
