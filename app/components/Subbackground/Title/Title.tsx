import Buttons from '@/app/components/Subbackground/Buttons/Buttons';
import config from '@/app/static/config';
import home from '@/app/static/home';
import { ModernButton } from '@willphan1712000/frontend';
import { TypeAnimation } from 'react-type-animation';
import styles from './title.module.css';

const Title = () => {
  return (
    <div className={styles.title}>
        <ModernButton first={config.thirdColor}>Bachelor of Science in Computer Science</ModernButton>
        <h1 className='text-[2rem] md:text-[3rem]'>{home.heading}</h1>
        <div className='pl-5'>
            {home.titles.map((title, index) => (
                <h1 key={index} className='text-[1rem] md:text-[1.5rem] text-black'>
                  <TypeAnimation 
                    sequence={[
                      index * 400,
                      title
                    ]}
                    wrapper="span"
                    speed={85}
                    repeat={0}
                    cursor={false}
                  />
                </h1>
            ))}
        </div>
        <Buttons />
    </div>
  )
}

export default Title
