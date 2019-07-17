import React, { useState } from 'react'
import { Field } from 'formik'
import '../../style/FormGroup.scss'
import RadioButton from '../../shared/RadioButton'

const form = [
  {
    label: 'Age',
    inputs: [
      { name: 'age', value: '18-24' },
      { name: 'age', value: '25-54' },
      { name: 'age', value: '55-61' },
      { name: 'age', value: '62 & Up' },
    ],
  },
  {
    label: 'Gender',
    inputs: [
      { name: 'gender', value: 'Female' },
      { name: 'gender', value: 'Male' },
      { name: 'gender', value: 'Transgender male to female' },
      { name: 'gender', value: 'Transgender female to male' },
      { name: 'gender', value: 'Other' },
      { name: 'gender', value: 'Unknown' },
    ],
  },
  {
    label: 'Race',
    inputs: [
      { name: 'race', value: 'White' },
      { name: 'race', value: 'Black/African American' },
      { name: 'race', value: 'Asian' },
      { name: 'race', value: 'American Indian/Alaska Native' },
      { name: 'race', value: 'Native Hawaiian/Other Pacific Islander' },
      { name: 'race', value: 'Multi-Racial/Other' },
      { name: 'race', value: 'Unknown' },
    ],
  },
  {
    label: 'Ethnicity',
    inputs: [
      { name: 'ethnicity', value: 'Hispanic/latino' },
      { name: 'ethnicity', value: 'Non Hispanic' },
      { name: 'ethnicity', value: 'Unknown' },
    ],
  },
  {
    label: 'House Status',
    inputs: [
      { name: 'house_status', value: 'Currently homeless' },
      { name: 'house_status', value: 'At risk of experiencing homelessness' },
      { name: 'house_status', value: 'Other' },
    ],
  },
  {
    label:
      'Is this individual chronically homeless(more than 4 times in 3 years or disabled and homeless more than 1 year)',
    inputs: [
      { name: 'chronically_homeless', value: 'Yes' },
      { name: 'chronically_homeless', value: 'No' },
    ],
  },
  {
    label: 'Are they a veteran',
    inputs: [
      { name: 'veteran', value: 'Yes' },
      { name: 'veteran', value: 'No' },
    ],
  },
]

const GeneralInfoFormGroup = props => {
  return (
    <div className="general-info-form-group">
      <div className="title">General Info</div>

      {form.map(form_input =>
        renderInput(form_input, props.handleChange, props.values)
      )}
    </div>
  )
}

const renderInput = (form_input, handleChange, values) => {
  return (
    <div key={form_input.label} className="form-inputs">
      <label className="label">{form_input.label}</label>

      {form_input.inputs.map(input => {
        return (
          <Field
            key={input.value}
            component={RadioButton}
            name={input.name}
            label={input.value}
            value={input.value}
            onChange={handleChange}
            values={values}
          />
        )
      })}
    </div>
  )
}

export default GeneralInfoFormGroup
