import React from 'react'
import DynamicFormFocus from './DynamicFormFocus'
import RealTimeValidationForm from './RealTimeValidationForm'
import CustomFormSubmission from './CustomFormSubmission'

function App() {
  return (
    <div>
      dynamic form focus
      <DynamicFormFocus />
      <br /><br />
      real time validation form
      <RealTimeValidationForm /><br /><br />
      custom form submission
      <CustomFormSubmission />
    </div>
  )
}

export default App