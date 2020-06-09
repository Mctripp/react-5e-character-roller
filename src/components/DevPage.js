import React, { Fragment } from 'react'
import Dropdown from './SHARED/Dropdown'
import ClassInfo from './ClassInfo/ClassInfo'

const DevPage = () => {
  const [currentClass, setCurrentClass] = React.useState('barbarian')
  // const [currentRace, setCurrentRace] = ('')

  const handleClassChange = event => {
    const idx = event.target.selectedIndex
    setCurrentClass(event.target[idx].value)
    console.log(event.target[idx].value)
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
