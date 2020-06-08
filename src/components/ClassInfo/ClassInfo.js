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
      url: `${dndApiUrl}classes/${{ className }.className}`
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
  }, [])

  if (isLoaded) {
    return (
      <Fragment>
        <h1>Saving throws:</h1>
        <h3>{ savingThrowsNames }</h3>
        <h3>{ savingThrowsURLs }</h3>
        <h1>Class proficiencies:</h1>
        <h3>{ classProficienciesNames }</h3>
        <h3>{ classProficienciesURLs }</h3>
        <h1>Class proficiency choices (Choose {classProficiencyChoicesNum}):</h1>
        <h3>{ classProficiencyChoicesNames }</h3>
        <h3>{ classProficiencyChoicesURLs }</h3>
        <h1>Starting Equipment URL:</h1>
        <h3>{ classEquipmentURL }</h3>
        <h1>Subclasses URLs:</h1>
        <h3>{ subclassesURLs }</h3>
        <h1>Levels URL:</h1>
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
