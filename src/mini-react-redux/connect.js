import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from '../mini-redux'

const connect = (mapStateToProps=state=>state, mapDispatchToProps) => WrapComponent => {
  return class ConnectComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    }
    
    constructor(props, context) {
      super(props, context)

      this.state = {
        props: {}
      }
    }

    componentDidMount() {
      const { store } = this.context
      store.subscribe(() => this.run())
      this.run()
    }

    run() {
      const { store } = this.context
      const stateProps = mapStateToProps(store.getState())
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
      
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps
        }
      })

    }

    render() {
      return <WrapComponent {...this.state.props}/>
    }
  }
}

export default connect