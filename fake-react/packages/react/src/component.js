import { enqueueRender } from './render-queue'

class BaseComponent {
  constructor(props = {}) {
    this.state = {}
    this.props = props
  }

  setState(state) {
    enqueueRender(state, this)
  }
}

export default BaseComponent
