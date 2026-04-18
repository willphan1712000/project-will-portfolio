import { ModernButton } from '@willphan1712000/frontend'
import { CiCalendarDate } from "react-icons/ci";
import Button from '../Button/Button';
import { Content } from './InfoStream';

import styles from './InfoStream.module.css'

import config from '@/app/static/config'

const InfoCard = ({ item }: { item: Content }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardInner}>
          <div className="title"><h1 className='text-[30px]'>{item.title}</h1></div>
          {item.tech && (
            <div className={styles.techDate}>
              <div className={styles.tech}>
                {item.tech?.map(each => (
                  <ModernButton key={each} first={config.primaryColor}>{each}</ModernButton>
                ))}
              </div>
              <div className={styles.date}>
                <CiCalendarDate size="20" />
                {item.date?.map(each => (
                  <p key={each}>{each}</p>
                ))}
              </div>
            </div>
          )}
          <ul className="des">
            {item.des?.map(each => (
              <li key={each}>{each}</li>
            ))}
          </ul>
          {item.link && <Button name='Github' link={item.link} />}
      </div>
    </div>
  )
}

export default InfoCard
