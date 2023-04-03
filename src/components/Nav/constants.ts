import { toast } from "react-toastify"
import { scrollToView } from "../../utils/scroll"
import { openURL } from "../../utils/url"

export const menus = [
  {
    label: 'about()',
    target: '#about',
    action: () => scrollToView('#about')
  },
  {
    label: 'projects()',
    target: '#projects',
    action: () => toast.warning('"projects()" is in progress')
  },
  {
    label: 'contactMe()',
    target: '#contactMe',
    action: () => toast.warning('"contactMe()" is in progress')
  },
]

export const CV_URL = "https://docs.google.com/document/d/1WKayGDe8uuSrcC3yx1zQ2EgY3svRJ6ZLPRfJ6jTqgo8/edit?usp=sharing"