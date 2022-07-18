import React, { useState } from 'react'
import HamburguerIcon from './icons/HamburguerIcon'
import './HamburguerMenu.css'

const HamburguerMenu = () => {
  // State for animating the burguer menu
  const [menuAnimation, changeMenuAnimation] = useState(false)

  return (
    <button
      className={menuAnimation ? 'menu navbar-toggler opened' : 'menu navbar-toggler'}
      id='idMenu'
      onClick={() => changeMenuAnimation(!menuAnimation)}
      type='button'
      data-toggle='collapse'
      data-target='#navbarTogglerDemo02'
      aria-label='Main Menu'
    >
      <HamburguerIcon />
    </button>
  )
}

export default HamburguerMenu
