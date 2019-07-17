import React from 'react'
import { Field } from 'formik'
import '../../style/FormGroup.scss'
import RadioButton from '../../shared/RadioButton'

const form = [
  {
    label: 'Family status',
    inputs: [
      { name: 'family_status', value: 'Single' },
      { name: 'family_status', value: 'Couple' },
      { name: 'family_status', value: 'Family w/ kids' },
    ],
  },
  {
    label: 'Income source',
    inputs: [
      { name: 'income_source', value: 'TANF' },
      { name: 'income_source', value: 'GR' },
      { name: 'income_source', value: 'SSI/SSDI' },
      { name: 'income_source', value: 'Job' },
      { name: 'income_source', value: 'Other' },
    ],
  },
  {
    label: 'Income per month',
    inputs: [
      { name: 'income_per_month', value: '$0' },
      { name: 'income_per_month', value: '$100-250' },
      { name: 'income_per_month', value: '$251-500' },
      { name: 'income_per_month', value: '$501-1000' },
      { name: 'income_per_month', value: '$1000-1500' },
      { name: 'income_per_month', value: '$1500 & Up' },
    ],
  },
]

const FamilyAndIncomeFormGroup = props => {
  return (
    <div className="general-info-form-group">
      <div className="title">Family and Income</div>

      {form.map(form_input =>
        renderInputs(form_input, props.handleChange, props.values)
      )}
    </div>
  )
}

const renderInputs = (form_input, handleChange, values) => {
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

export default FamilyAndIncomeFormGroup
