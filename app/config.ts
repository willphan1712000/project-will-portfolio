

function getScrollVar() {
    const htmlElement = document.documentElement
    const percentage = htmlElement.scrollTop/htmlElement.clientHeight

    htmlElement.style.setProperty("--scroll", percentage.toString())

    return [htmlElement.scrollTop, percentage] as [number, number]
}

export { getScrollVar }