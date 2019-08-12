import React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import ClinicFormGroup from './ClinicFormGroup'
import ContactInfoFormGroup from './ContactInfoFormGroup'
import GeneralInfoFormGroup from './GeneralInfoFormGroup'
import FamilyAndIncomeFormGroup from './FamilyAndIncomeFormGroup'
import AgreementsFormGroup from './AgreementsFormGroup'
import { Grid } from '@material-ui/core'
import { API_BASE_URL } from '../../config/url_config';
import { UserAuth } from '../../utilities/auth';
import axios from 'axios';

export const PersonalInfoForm = () => {

  const handleSubmit = (data) => {
    const authToken = UserAuth.getAuthToken();

    let config = {
      headers: {
        // Provide user's auth token as credentials
        Authorization: `Bearer ${authToken}`,
      }
    }
    const postData = async () => {
     const result = await axios.post(`${API_BASE_URL}/participants`, { data, timeout: 5000 }, config)
    };

    postData();
  }

  return (
    <Formik onSubmit={values => console.log(values, "onSubmit")}>
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
                onClick={() => handleSubmit(props.values)}
              >
                Save and Exit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
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
