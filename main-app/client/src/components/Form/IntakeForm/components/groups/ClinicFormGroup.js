import React, { useState } from 'react'
import { Field } from 'formik'
import '../../style/FormGroup.scss'

const ClinicFormGroup = props => {
  const [date, setDate] = useState('')

  const insertTodaysDate = e => {
    e.preventDefault()
    setDate(new Date().toLocaleDateString())
  }

  return (
    <div className="clinic-form-group">
      <div className="title">Clinic Attended</div>

      <div className="form-inputs">
        <label className="label">Today's date</label>

        <Field
          name="date"
          placeholder="date"
          className="input-field"
          onChange={props.handleChange}
          value={date}
        />

        <button
          onClick={e => insertTodaysDate(e)}
          className="input-current-date-btn"
        >
          Insert Current Date
        </button>
      </div>

      <div className="form-inputs">
        <label className="label">Referral Source</label>

        <Field
          name="referral_source"
          placeholder="source"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default ClinicFormGroup
