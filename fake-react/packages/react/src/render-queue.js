import { renderComponent } from '../react-dom/diff'

const setStateQueue = []
const renderQueue = []

function defer(fn) {
  return Promise.resolve().then(fn)
}

export function enqueueRender(state, component) {
  if (setStateQueue.length === 0) defer(updateComponent)
  setStateQueue.push({
    state,
    component
  })

  if (!renderQueue.some(item => item === component)) renderQueue.push(component)
}

function updateComponent() {
  let item
  let component
  while (item = setStateQueue.shift()) {
    const { state, component } = item
    if (!component.prevState) component.prevState = Object.assign({}, component.state)
    if (typeof state === 'function') {
      Object.assign(
        component.state,
        state(component.prevState, component.props)
      )
    } else Object.assign(component.state, state)

    component.prevState = component.state
  }

  while (component = renderQueue.shift()) {
    renderComponent(component)
  }
}
