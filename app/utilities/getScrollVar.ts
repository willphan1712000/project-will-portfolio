/**
 * Get scroll to top, width of viewport, height of viewport
 */
export default function getScrollVar() {
    const htmlElement = document.documentElement
    const width = window.innerWidth
    const height = window.innerHeight
    return { scroll: htmlElement.scrollTop, width, height }
}