import React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import ClinicFormGroup from './ClinicFormGroup'
import ContactInfoFormGroup from './ContactInfoFormGroup'
import GeneralInfoFormGroup from './GeneralInfoFormGroup'
import FamilyAndIncomeFormGroup from './FamilyAndIncomeFormGroup'
import AgreementsFormGroup from './AgreementsFormGroup'
import { Grid } from '@material-ui/core'
import {createParticipant} from '../../actions/participant'
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required.')
});

const PersonalInfoForm = () => {
  return (
    <Formik
      onSubmit={values => console.log(values, "onSubmit")}
      initialValues={{ first_name: '' }}
      validationSchema={ValidationSchema}>
      {props => (
        <Form>
          <ClinicFormGroup {...props} />
          <ContactInfoFormGroup {...props} />
          <GeneralInfoFormGroup {...props} />
          <FamilyAndIncomeFormGroup {...props} />
          <AgreementsFormGroup {...props} />
          {/*The rest of the form groups could go here */}
          <br />
          <br />
          <Grid container justify="center" spacing={4}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="default"
                onClick={() => createParticipant(props.values)}
              >
                Save and Exit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => createParticipant(props.values)}
              >
                Save and Continue
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default PersonalInfoForm
