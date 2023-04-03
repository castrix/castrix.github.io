export const scrollToView = (target: string) => {
  const elemet= document.getElementById(target)
  if (!elemet) return;
  elemet.scrollIntoView({
    behavior: "smooth"
  })
}