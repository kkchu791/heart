import React from 'react'
import { ErrorMessage } from 'formik'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inputField: {
    width: '50%',
    fontSize: '14px',
    color: '#4f4f4f',
    padding: '10px',
    marginTop: '5px',
  },
  inputFieldRed: {
    width: '50%',
    fontSize: '14px',
    color: '#4f4f4f',
    padding: '10px',
    marginTop: '5px',
    borderColor: 'red',
  },
  inputFeedback: {
    color: 'red',
  },
  inputBorder: {
    borderColor: 'red',
  }
}))

export const BasicField = ({
  field: { name, onBlur, onChange },
  type,
  value,
  label,
  values,
  placeholder,
  error,
}) => {
  const classes = useStyles()
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={error ? classes.inputBorder : classes.inputField}
      />
      <ErrorMessage name={name} component="div" className={classes.inputFeedback} />
    </div>
  )
}

export default BasicField
