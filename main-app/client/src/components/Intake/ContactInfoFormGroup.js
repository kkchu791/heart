import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { BasicField } from '../Form/shared'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  label: {
    fontSize: '16px',
    color: '#4f4f4f',
    display: 'block',
    paddingBottom: '4px',
    textAlign: 'left',
  },
  formInput: {
    padding: '12px 0',
  },
  starStyle: {
    color: 'red',
  },
}))

const form = [
  {
    component: BasicField,
    label: 'First Name',
    inputs: [
      {
        type: 'text',
        name: 'first_name',
        placeholder: 'First Name',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: 'Middle Name',
    inputs: [
      {
        type: 'text',
        name: 'middle_name',
        placeholder: 'Middle Name',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: 'Last Name',
    inputs: [
      { type: 'text', name: 'last_name', placeholder: 'Last Name', value: '' },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Also Known As - AKA (Optional)',
    inputs: [
      {
        type: 'text',
        name: 'aka',
        placeholder: 'Also Known As - AKA (Optional)',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: "Driver's License / ID Number",
    inputs: [
      {
        type: 'text',
        name: 'dl',
        placeholder: "Driver's License / ID Number",
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: 'Date of Birth',
    inputs: [
      {
        type: 'date',
        name: 'dob',
        placeholder: 'Date of Birth',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Phone Number (optional)',
    inputs: [
      {
        type: 'tel',
        name: 'phone',
        placeholder: 'Phone Number (optional)',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Email Address (optional)',
    inputs: [
      {
        type: 'email',
        name: 'email',
        placeholder: 'Email Address (optional)',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Mailing Address (optional)',
    inputs: [
      {
        type: 'text',
        name: 'address',
        placeholder: 'Mailing Address (optional)',
        value: '',
      },
    ],
  },
]

const ContactInfoFormGroup = props => {
  console.log(props, 'props check it ')
  const classes = useStyles()
  return (
    <div className="contact-info-form-group">
      <h4>Contact Information</h4>

      {form.map(form_input =>
        renderInput(form_input, props.handleChange, props.handleBlur, props.values, classes, props.errors, props.touched)
      )}
    </div>
  )
}

const renderInput = (form_input, handleChange, handleBlur, values, classes, errors, touched) => {
  console.log(errors, "touched")
  return (
    <div key={form_input.label} className={classes.formInput}>
      <label className={classes.label}>
        {form_input.label}
        <span className={classes.starStyle}>{!form_input.optional && '*'}</span>
      </label>
      {form_input.inputs.map(input => {
        return (
          <div>
            <Field
              key={input.value}
              component={form_input.component}
              name={input.name}
              label={input.value}
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              onChange={handleChange}
              values={values}
              error={errors[input.name] && touched[input.name]}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ContactInfoFormGroup
