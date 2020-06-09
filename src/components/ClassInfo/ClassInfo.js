import React, { Fragment } from 'react'
// import ClassEquipment from './ClassEquipment/ClassEquipment'
// import ClassProficiencies from './ClassProficiencies/ClassProficiencies'
// import ClassProficiencyChoices from './ClassProficiencyChoices/ClassProficiencyChoices'
// import Levels from './Levels/Levels'
// import SavingThrows from './SavingThrows/SavingThrows'
// import Subclasses from './Subclasses/Subclasses'
import axios from 'axios'
import dndApiUrl from './../../dndApiConfig'

const ClassInfo = ({ className }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [classEquipmentURL, setClassEquipmentURL] = React.useState('')
  const [classProficienciesNames, setClassProficienciesNames] = React.useState([])
  const [classProficienciesURLs, setClassProficienciesURLs] = React.useState([])
  const [classProficiencyChoicesNames, setClassProficiencyChoicesNames] = React.useState([])
  const [classProficiencyChoicesURLs, setClassProficiencyChoicesURLs] = React.useState([])
  const [classProficiencyChoicesNum, setClassProficiencyChoicesNum] = React.useState(null)
  const [levelsURL, setLevelsURL] = React.useState('')
  const [savingThrowsNames, setSavingThrowsNames] = React.useState([])
  const [savingThrowsURLs, setSavingThrowsURLs] = React.useState([])
  const [subclassesURLs, setSubclassesURLs] = React.useState([])

  React.useEffect(() => {
    console.log({ className }.className)
    axios({
      url: `${dndApiUrl}/api/classes/${{ className }.className}`
    })
      .then(res => {
        // Saving throws
        setSavingThrowsNames(res.data.saving_throws.map(savingThrow => {
          return savingThrow.name
        }))
        setSavingThrowsURLs(res.data.saving_throws.map(savingThrow => {
          return savingThrow.url
        }))

        // Proficiencies
        setClassProficienciesNames(res.data.proficiencies.map(proficiency => {
          return proficiency.name
        }))
        setClassProficienciesURLs(res.data.proficiencies.map(proficiency => {
          return proficiency.url
        }))

        // Proficiency Choices
        setClassProficiencyChoicesNames(res.data.proficiency_choices[0].from.map(proficiencyChoice => {
          return proficiencyChoice.name
        }))
        setClassProficiencyChoicesURLs(res.data.proficiency_choices[0].from.map(proficiencyChoice => {
          return proficiencyChoice.url
        }))
        setClassProficiencyChoicesNum(res.data.proficiency_choices[0].choose)

        // Starting equipment
        setClassEquipmentURL(res.data.starting_equipment.url)

        // Subclasses
        setSubclassesURLs(res.data.subclasses.map(subclass => {
          return subclass.url
        }))

        // Levels
        setLevelsURL(res.data.class_levels.url)
      })
      .then(setIsLoaded(true))
      .catch(console.error)
  }, [className])

  if (isLoaded) {
    return (
      <Fragment>
        <h1>CLASS INFO</h1>
        <h2><u>Saving Throws</u></h2>
        <h3>
          <ul>
            { savingThrowsNames.map((savingThrowName, index) => {
              const savingThrowURL = savingThrowsURLs[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + savingThrowURL} target={'_blank'}>{savingThrowName}</a></li>
              )
            }) }
          </ul>
        </h3>
        <h2><u>Class Proficiencies</u></h2>
        <h3><ul>
          { classProficienciesNames.map((classProficienciesName, index) => {
            const classProficienciesURL = classProficienciesURLs[index]
            return (
              <li key={index}><a href={`${dndApiUrl}` + classProficienciesURL} target={'_blank'}>{classProficienciesName}</a></li>
            )
          }) }
        </ul></h3>
        <h2><u>Class proficiency choices (Choose {classProficiencyChoicesNum})</u></h2>
        <h3><ul>
          { classProficiencyChoicesNames.map((classProficiencyChoicesName, index) => {
            const classProficiencyChoicesURL = classProficiencyChoicesURLs[index]
            return (
              <li key={index}><a href={`${dndApiUrl}` + classProficiencyChoicesURL} target={'_blank'}>{classProficiencyChoicesName}</a></li>
            )
          }) }
        </ul></h3>
        <h2><u>Starting Equipment URL</u></h2>
        <h3>{ classEquipmentURL }</h3>
        <h2><u>Subclasses URLs</u></h2>
        <h3>{ subclassesURLs }</h3>
        <h2><u>Levels URL</u></h2>
        <h3>{ levelsURL }</h3>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <p>
        Loading...
        </p>
      </Fragment>
    )
  }
}

export default ClassInfo
