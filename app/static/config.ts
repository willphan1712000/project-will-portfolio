function getScrollVar() {
    const htmlElement = document.documentElement
    const percentage = htmlElement.scrollTop/htmlElement.clientHeight

    htmlElement.style.setProperty("--scroll", percentage.toString())

    return [htmlElement.scrollTop, percentage] as [number, number]
}

const config = {
    primaryColor: "#9276ff",
    secondColor: "#3ea2cf",
    thirdColor: "purple",
    maxWidth: "1500px"
}

export default config;
export { getScrollVar }