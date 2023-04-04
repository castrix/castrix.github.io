import { toast } from "react-toastify"
import { scrollToView } from "../../utils/scroll"
import { focusToCommand } from "../../utils/input";

export const menus = [
  {
    label: 'about()',
    target: '#about',
    action: () => { focusToCommand(); scrollToView('#about') }
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
] as const
