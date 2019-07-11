import React, { useState } from 'react'
import '../style/IntakeForm.scss'

const titles = ['Personal Information', 'Obligations', 'Agreement']

const FormNavigator = props => {
  const [active, setActive] = useState(0)
  return (
    <div className="form-navigator">
      <div className="intake-title">Intake Form ({active + 1} of 3)</div>

      <div className="form-header">

        <div
          className={`form-header-tab ${active === 0 ? 'active' : ''}`}
          onClick={() => setActive(0)}>
          Personal Information
        </div>
        <div
          className={`form-header-tab ${active === 1 ? 'active' : ''}`}
          onClick={() => setActive(1)}
        >
          Obligations
        </div>
        <div
          className={`form-header-tab ${active === 2 ? 'active' : ''}`}
          onClick={() => setActive(2)}
        >
          Agreement
        </div>
      </div>
      <div className="intake-form">
        {props.children[active]}
        <button onClick={() => setActive(active + 1)}>
          Continue to {titles[active + 1]}
        </button>
      </div>
    </div>
  )
}

export default FormNavigator
