import React from 'react'
import ClinicFormGroup from '../groups/ClinicFormGroup'
import ContactInfoFormGroup from '../groups/ContactInfoFormGroup'
import GeneralInfoFormGroup from '../groups/GeneralInfoFormGroup'
import FamilyAndIncomeFormGroup from '../groups/FamilyAndIncomeFormGroup'

const PersonalInfo = props => {
  return (
    <div>
      <ClinicFormGroup {...props} />
      <ContactInfoFormGroup {...props} />
      <GeneralInfoFormGroup {...props} />
      <FamilyAndIncomeFormGroup {...props} />
    </div>
  )
}

export default PersonalInfo
