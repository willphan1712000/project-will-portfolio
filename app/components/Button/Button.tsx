import config from '@/app/static/config'
import styles from './Buttons.module.css'

const Button = ({ link, name }: { link? : string, name? : string }) => {
  return (
    <div className={styles.btnWrapper} style={{'--primary-color': config.primaryColor} as React.CSSProperties}>
        <a href={link} className={styles.btn} target="_blank" style={{'--primary-color': config.primaryColor} as React.CSSProperties}>{name}</a>
    </div>
  )
}

export default Button
