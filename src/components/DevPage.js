import React, { Fragment } from 'react'
import Dropdown from './SHARED/Dropdown'
import ClassInfo from './ClassInfo/ClassInfo'

const DevPage = () => {
  const [currentClass, setCurrentClass] = React.useState('barbarian')
  // const [currentRace, setCurrentRace] = ('')

  const handleClassChange = event => {
    setCurrentClass(event.target.currentResource)
    console.log(currentClass)
  }

  // const handleRaceChange = event => {
  //   setCurrentRace(event.target.currentRace)
  // }

  return (
    <Fragment>
      <Dropdown
        urlSuffix='races'
        resourceName='Race'
        // handleChange={handleRaceChange}
      >
      </Dropdown>
      <Dropdown
        urlSuffix='classes'
        resourceName='Class'
        handleChange={handleClassChange}
      >
      </Dropdown>
      <ClassInfo
        className={currentClass}
      >
      </ClassInfo>
    </Fragment>
  )
}

export default DevPage
