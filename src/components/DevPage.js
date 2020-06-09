import React from 'react'
import Dropdown from './SHARED/Dropdown'
import ClassInfo from './ClassInfo/ClassInfo'
import RaceInfo from './RaceInfo/RaceInfo'
import { Row, Col } from 'react-bootstrap'

const DevPage = () => {
  const [currentClass, setCurrentClass] = React.useState('barbarian')
  const [currentRace, setCurrentRace] = React.useState('dragonborn')

  const handleClassChange = event => {
    const idx = event.target.selectedIndex
    setCurrentClass(event.target[idx].value)
    console.log(event.target[idx].value)
  }

  const handleRaceChange = event => {
    const idx = event.target.selectedIndex
    setCurrentRace(event.target[idx].value)
    console.log(event.target[idx].value)
  }

  return (
    <Row>
      <Col>
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
      </Col>
      <Col>
        <Dropdown
          urlSuffix='races'
          resourceName='Race'
          handleChange={handleRaceChange}
        >
        </Dropdown>
        <RaceInfo
          raceName={currentRace}
        >
        </RaceInfo>
      </Col>
    </Row>
  )
}

export default DevPage
