import { StyledWelcome } from './styles'
import { Title } from '../Title'
import { motion } from 'framer-motion'

export const Welcome = () => {
  return (
    <StyledWelcome>
      <motion.div 
        className='stars-container'
        initial={{ opacity: 0}}
        whileInView={{ opacity: 100}}
        viewport={{ once: true }}
        transition={{duration: 1}}>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <Title />
      </motion.div>
      <h1>Joel Esteban Diaz Arévalo @Joelesdar</h1>
    </StyledWelcome>
  )
}
