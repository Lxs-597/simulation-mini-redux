import React from 'react'
import PropTypes from 'prop-types'

export default class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.store
    }
  }

  constructor(props) {
    super(props)

    this.store = props.store
  }

  render() {
    return this.props.children
  }
}