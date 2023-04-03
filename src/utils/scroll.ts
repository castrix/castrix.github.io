import React from "react";

export const scrollToView = (target: string) => {
  const elemet = document.getElementById(target)
  if (!elemet) return;
  elemet.scrollIntoView({
    behavior: "smooth"
  })
}

export const useWindowScroll = () => {
  const [scrollY, setScrollY] = React.useState(0)

  const handleScroll = () => {
    setScrollY(window.pageYOffset || document.documentElement.scrollTop)
  }

  React.useEffect(() => {
    setScrollY(window.pageYOffset || document.documentElement.scrollTop)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return [scrollY]
}