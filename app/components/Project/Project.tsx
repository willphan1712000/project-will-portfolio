import { useSession } from 'next-auth/react';
import useMyContext from '../../context/Context';
import Wrapper from '../MultiEditLink/Wrapper';
import styles from './project.module.css';
import config from '@/app/static/config';

const Project = () => {
    const data = useMyContext()
    const projects = data.project
    const {status} = useSession()

    const btn_wraper = `p-[0.13rem] rounded-[0.55rem] bg-black hover:shadow-2xl transition-all duration-100 w-[10rem] h-[3rem] flex-shrink-0`
    const btn = `flex bg-black size-full rounded-[0.55rem] justify-center items-center`

    return (
        <div className='p-[2rem]'>
            <div className={styles.border} style={{
                    "--primary-color": config.primaryColor,
                    "--second-color": config.secondColor
                } as React.CSSProperties}>
                <div className='flex flex-col items-center justify-center size-full p-[2rem] bg-white rounded-[0.7rem]'>
                    <div className="mb-[0.5rem] text-[1.5rem]"><p>My Project</p></div>
                    <div style={{scrollbarWidth: 'none'}} className="w-full flex flex-col lg:justify-center items-center md:flex-row gap-3 text-white overflow-auto">
                        {status === 'unauthenticated' && projects!.map((project, idx) => (
                            <div key={idx} className={btn_wraper}>
                                <a href={project.url} className={btn} target="_blank">{project.name}</a>
                            </div>
                        ))}
                    </div>
                    <p className='hidden md:flex lg:hidden mt-3'>Scroll to the right to see more</p>
                    {status === 'authenticated' && <Wrapper projects={projects!}/>}
                </div>
            </div>
        </div>
    )
}

export default Project