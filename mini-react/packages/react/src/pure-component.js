import { shallowEqual } from '../../react-utils/src/index'

import Component from './component'

class PureComponent extends Component {
  isPureComponent = true
  shouldComponentUpdate (nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
  }
}

export default PureComponent
