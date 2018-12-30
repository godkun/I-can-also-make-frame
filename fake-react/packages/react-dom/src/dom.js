export function setAttribute(dom, name, value = '') {
  const re = /on\w+/
  if (name === 'className') name = 'class'
  if (re.test(name)) {
    name = name.toLowerCase()
    dom[name] = value
  } else if (name === 'style') {
    if (!value || typeof value === 'string') node.style.cssText = value
    else if (value && typeof value === 'object')
      for (let key in value) {
        dom.style[key] = typeof value[key] === 'number' ? value[key] + 'px' : value[key]
      }
  } else {
    if (name in dom) dom[name] = value
    if (value) dom.setAttribute(name, value)
    else dom.removeAttribute(name, value)
  }
}
