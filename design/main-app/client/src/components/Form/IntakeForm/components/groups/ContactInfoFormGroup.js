import React, { useState } from 'react'
import { Field } from 'formik'
import '../../style/FormGroup.scss'

const form = [
  {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'first name',
    show: true,
  },
  {
    label: 'Middle Name',
    name: 'middle_name',
    placeholder: 'middle name',
    show: true,
  },
  {
    label: 'Last Name',
    name: 'last_name',
    placeholder: 'last name',
    show: true,
  },
  {
    label: "Also known as 'AKA' (Optional)",
    name: 'also_known_as',
    placeholder: 'also known as',
    show: true,
  },
  {
    label: 'Drivers License/ID number',
    name: 'drivers_license',
    placeholder: 'Drivers License/ID number',
    show: true,
  },
  {
    label: 'Date of Birth',
    name: 'date_of_birth',
    placeholder: 'date of birth',
    show: true,
  },
  {
    label: 'Phone Number (Optional)',
    name: 'phone_number',
    placeholder: 'phone number',
    show: true,
  },
  {
    label: 'Email Address (Optional)',
    name: 'email_address',
    placeholder: 'email address',
    show: true,
  },
  {
    label: 'Mailing Address (Optional)',
    name: 'mailing_address',
    placeholder: 'mailing address',
    show: true,
  },
  {
    label: 'Secondary Name (Optional)',
    name: 'secondary_name',
    placeholder: 'secondary name',
    show: false,
  },
  {
    label: 'Secondary Email (Optional)',
    name: 'secondary_email',
    placeholder: 'secondary email',
    show: false,
  },
  {
    label: 'Secondary Phone Number (Optional)',
    name: 'secondary_phone_number',
    placeholder: 'secondary phone number',
    show: false,
  },
]

const ContactInfoFormGroup = props => {
  const showSecondaryInfoFields = e => {
    e.preventDefault()
    toggleSecondaryFields(showExtraField ? false : true)
  }

  const [showExtraField, toggleSecondaryFields] = useState(false)
  return (
    <div className="contact-info-form-group">
      <div className="title">Contact Information</div>

      {form.map(input => {
        return (
          <div
            key={input.label}
            className={`form-inputs ${
              input.show || showExtraField ? null : 'hidden'
            }`}
          >
            <label className="label">{input.label}</label>

            <Field
              type={input.name}
              name={input.name}
              placeholder={input.placeholder}
              className="input-field"
              onChange={props.handleChange}
            />
          </div>
        )
      })}

      <div className="form-inputs">
        <label className="label">
          Does this person have a secondary name, email, or phone number?
        </label>
        <button
          onClick={e => showSecondaryInfoFields(e)}
          className="secondary-info-btn"
        >
          {showExtraField ? 'Hide' : 'Add'} Secondary Contact Info (optional)
        </button>
      </div>
    </div>
  )
}

export default ContactInfoFormGroup
