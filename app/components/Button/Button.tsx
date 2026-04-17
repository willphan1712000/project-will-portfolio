import config from '@/app/static/config'
import { ModernButton } from '@willphan1712000/frontend'
import styles from './Buttons.module.css'

const Button = ({ link, name }: { link? : string, name? : string }) => {
  return (
    <ModernButton
        first={config.primaryColor}
        hover={true}
        href={link}
        className={styles.btn}
        target='_blank'
    >{name}</ModernButton>
  )
}

export default Button
