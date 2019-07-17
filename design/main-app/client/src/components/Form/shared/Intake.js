import React, {Component} from 'react'
import './Intake.scss'

const Intake = (WrappedComponent) => {
  console.log(WrappedComponent, "wrapped")
  return class extends Component {
    render() {
      return (
        <div className="intake">
          <div className="top-header"></div>
          <WrappedComponent />
        </div>
      )
    }
  }
}

export default Intake
