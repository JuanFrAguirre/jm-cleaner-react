const useScrollPercentage = () => {
  const scrollTop = window.pageYOffset
  const windowHeight = window.innerHeight
  const docHeight = () =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    )

  const scrollPostion = Math.floor(
    (scrollTop / (docHeight() - windowHeight)) * 100,
  )

  return scrollPostion
}

export default useScrollPercentage
