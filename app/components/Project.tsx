import { Project as ProjectSchema } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Wrapper from './MultiEditLink/Wrapper';

// type Project = | 'bio' | 'tv' | 'W' | 'portfolio' | 'issueTracker' | 'cm' | 'python'

// const link: Record<Project, { url: string; label: string }> = {
//     portfolio: {
//         url: 'https://github.com/willphan1712000/will',
//         label: 'Portfolio',
//     },
//     W: {
//         url: 'https://github.com/willphan1712000/Web-Development',
//         label: 'Web Development',
//     },
//     bio: {
//         url: 'https://github.com/willphan1712000/bio',
//         label: 'Bio',
//     },
//     tv: {
//         url: 'https://github.com/willphan1712000/vtv',
//         label: 'TV',
//     },
//     cm: {
//         url: 'https://github.com/willphan1712000/cm',
//         label: 'CMS',
//     },
//     issueTracker: {
//         url: 'https://github.com/willphan1712000/issue-tracker',
//         label: 'Issue Tracker',
//     },
//     python: {
//         url: 'https://github.com/willphan1712000/willphanpy',
//         label: 'Python',
//     },
// };

const Project = () => {
    const {status} = useSession()
    
    const {data: projects, error, isLoading} = useQuery<ProjectSchema[]>({
        queryKey: ['project'],
        queryFn: () => axios.get("/api/main/project").then(res => res.data)
    })
    
    if (error) return null
    
    if (isLoading) return <p>Loading...</p>

    const btn_wraper = `p-[0.13rem] rounded-[0.55rem] bg-black hover:shadow-2xl transition-all duration-100 w-[10rem] h-[3rem] flex-shrink-0`
    const btn = `flex bg-black size-full rounded-[0.55rem] justify-center items-center`

    return (
        <div className='p-[2rem]'>
            <div className='bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 rounded-[0.7rem] p-[0.13rem]'>
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