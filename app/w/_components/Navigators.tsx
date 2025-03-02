import { Button } from '@willphan1712000/w';
import { useRouter } from 'next/navigation';

// const options = [
//   { label: 'nodejs', value: 'nodejs' },
//   { label: 'prisma', value: 'prisma' },
//   { label: 'react', value: 'react' },
//   { label: 'typescript', value: 'typescript' },
//   { label: 'express', value: 'express' },
//   { label: 'mongodb', value: 'mongodb' },
//   { label: 'graphql', value: 'graphql' },
//   { label: 'docker', value: 'docker' },
//   { label: 'nextjs', value: 'nextjs' },
//   { label: 'tailwindcss', value: 'tailwindcss' },
//   { label: 'redux', value: 'redux' },
//   { label: 'javascript', value: 'javascript' },
//   { label: 'vue', value: 'vue' },
//   { label: 'angular', value: 'angular' },
//   { label: 'jest', value: 'jest' },
//   { label: 'firebase', value: 'firebase' },
//   { label: 'nestjs', value: 'nestjs' },
//   { label: 'vscode', value: 'vscode' },
//   { label: 'sass', value: 'sass' },
//   { label: 'webpack', value: 'webpack' },
//   { label: 'npm', value: 'npm' },
//   { label: 'yarn', value: 'yarn' },
//   { label: 'flask', value: 'flask' },
//   { label: 'django', value: 'django' },
//   { label: 'php', value: 'php' },
//   { label: 'mysql', value: 'mysql' },
//   { label: 'postgresql', value: 'postgresql' },
//   { label: 'python', value: 'python' },
//   { label: 'aws', value: 'aws' },
//   { label: 'azure', value: 'azure' },
//   { label: 'cloudflare', value: 'cloudflare' },
//   { label: 'cypress', value: 'cypress' },
//   { label: 'mocha', value: 'mocha' },
//   { label: 'chai', value: 'chai' },
//   { label: 'html', value: 'html' },
//   { label: 'css', value: 'css' },
//   { label: 'bulma', value: 'bulma' },
//   { label: 'jquery', value: 'jquery' },
//   { label: 'git', value: 'git' },
//   { label: 'github', value: 'github' },
//   { label: 'gitlab', value: 'gitlab' },
//   { label: 'bitbucket', value: 'bitbucket' },
//   { label: 'kubernetes', value: 'kubernetes' },
//   { label: 'vagrant', value: 'vagrant' },
//   { label: 'bash', value: 'bash' },
//   { label: 'zsh', value: 'zsh' },
//   { label: 'markdown', value: 'markdown' },
//   { label: 'json', value: 'json' },
//   { label: 'csv', value: 'csv' },
// ];

const Navigators = () => {
  const route = useRouter()

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10'>
        <Button content='UI components' type='gradient' onClick={() => route.push('/w/ui')}/>
        <Button content='API' type='solid' onClick={() => route.push('/w/api')}/>
        <Button content='Async State Management' type='gradient' onClick={() => route.push('/w/async')}/>
        <Button content='Usability' type='solid' onClick={() => route.push('/w/u')}/>
      </div>
    </>
  )
}

export default Navigators
