import { getSection } from './TableOfContents'

/**
 * Section heading for a UI demo. The id ties it to its entry in the sticky table of contents
 */
const SectionHeading = ({ id }: { id: string }) => {
  const section = getSection(id)

  return (
    <h1 id={section.id} className='text-2xl scroll-mt-20'>{section.table.name}</h1>
  )
}

export default SectionHeading
