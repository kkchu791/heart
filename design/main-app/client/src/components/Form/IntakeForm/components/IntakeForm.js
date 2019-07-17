import React from 'react'
import Paper from '@material-ui/core/Paper'
import '../style/IntakeForm.scss'
import { Formik, Form } from 'formik'
import FormNavigator from '../shared/FormNavigator'
import PersonalInfo from './containers/PersonalInfo'
import Obligations from './containers/Obligations'
import Agreement from './containers/Agreement'
import Intake from '../../Intake'

const IntakeForm = () => {
  return (
    <Paper elevation={10} className="paper">
      <Formik onSubmit={values => console.log(values)}>
        {props => (
          <Form>
            <FormNavigator>
              <PersonalInfo {...props} />
              <Obligations {...props} />
              <Agreement {...props} />
            </FormNavigator>
          </Form>
        )}
      </Formik>
    </Paper>
  )
}

export default Intake(IntakeForm);
