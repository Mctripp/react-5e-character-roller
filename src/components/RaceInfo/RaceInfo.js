import React, { Fragment } from 'react'
// import ClassEquipment from './ClassEquipment/ClassEquipment'
// import ClassProficiencies from './ClassProficiencies/ClassProficiencies'
// import ClassProficiencyChoices from './ClassProficiencyChoices/ClassProficiencyChoices'
// import Levels from './Levels/Levels'
// import SavingThrows from './SavingThrows/SavingThrows'
// import Subclasses from './Subclasses/Subclasses'
import axios from 'axios'
import dndApiUrl from './../../dndApiConfig'

const RaceInfo = ({ raceName }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [raceAbilityBonusesNames, setRaceAbilityBonusesNames] = React.useState([])
  const [raceAbilityBonusesNums, setRaceAbilityBonusesNums] = React.useState([])
  const [raceAbilityBonusesURLs, setRaceAbilityBonusesURLs] = React.useState([])
  // const [raceSpeed, setRaceSpeed] = React.useState(null)
  // const [raceAlignment, setRaceAlignment] = React.useState('')
  // const [raceAge, setRaceAge] = React.useState('')
  // const [raceSize, setRaceSize] = React.useState('')
  // const [raceSizeDescription, setRaceSizeDescription] = React.useState('')
  // // Might have to expand this one
  // const [raceStartingProficiencies, setRaceStartingProficiencies] = React.useState([])
  // const [raceLanguagesNames, setRaceLanguagesNames] = React.useState([])
  // const [raceLanguagesURLs, setRaceLanguagesURLs] = React.useState([])
  // const [raceLanguageDesc, setRaceLanguageDesc] = React.useState('')
  // const [raceTraitsNames, setRaceTraitsNames] = React.useState([])
  // const [raceTraitsURLs, setRaceTraitsURLs] = React.useState([])
  // const [raceTraitOptionsChoose, setRaceTraitOptionsChoose] = React.useState(null)
  // const [raceTraitOptionsNames, setRaceTraitOptionsNames] = React.useState([])
  // const [raceTraitOptionsURLs, setRaceTraitOptionsURLs] = React.useState([])
  // const [raceSubracesURLs, setRaceSubracesURLs] = React.useState([])
  // const [raceSubracesNames, setRaceSubracesNames] = React.useState([])

  React.useEffect(() => {
    console.log({ raceName }.raceName)
    axios({
      url: `${dndApiUrl}/api/races/${{ raceName }.raceName}`
    })
      .then(res => {
        // Ability Bonuses
        setRaceAbilityBonusesNames(res.data.ability_bonuses.map(abilityBonus => {
          return abilityBonus.name
        }))
        setRaceAbilityBonusesURLs(res.data.ability_bonuses.map(abilityBonus => {
          return abilityBonus.url
        }))
        setRaceAbilityBonusesNums(res.data.ability_bonuses.map(abilityBonus => {
          return abilityBonus.bonus
        }))
        //
        // // Proficiencies
        // setClassProficienciesNames(res.data.proficiencies.map(proficiency => {
        //   return proficiency.name
        // }))
        // setClassProficienciesURLs(res.data.proficiencies.map(proficiency => {
        //   return proficiency.url
        // }))
        //
        // // Proficiency Choices
        // setClassProficiencyChoicesNames(res.data.proficiency_choices[0].from.map(proficiencyChoice => {
        //   return proficiencyChoice.name
        // }))
        // setClassProficiencyChoicesURLs(res.data.proficiency_choices[0].from.map(proficiencyChoice => {
        //   return proficiencyChoice.url
        // }))
        // setClassProficiencyChoicesNum(res.data.proficiency_choices[0].choose)
        //
        // // Starting equipment
        // setClassEquipmentURL(res.data.starting_equipment.url)
        //
        // // Subclasses
        // setSubclassesURLs(res.data.subclasses.map(subclass => {
        //   return subclass.url
        // }))
        //
        // // Levels
        // setLevelsURL(res.data.class_levels.url)
      })
      .then(setIsLoaded(true))
      .catch(console.error)
  }, [raceName])

  if (isLoaded) {
    return (
      <Fragment>
        <h1>RACE INFO</h1>
        <h2><u>Ability Bonuses</u></h2>
        <h3>
          <ul>
            { raceAbilityBonusesNames.map((abilityBonusName, index) => {
              const abilityBonusURL = raceAbilityBonusesURLs[index]
              const abilityBonusNum = raceAbilityBonusesNums[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + abilityBonusURL} target={'_blank'}>{abilityBonusName}: +{abilityBonusNum}</a></li>
              )
            }) }
          </ul>
        </h3>
      </Fragment>
      // <h2><u>Class Proficiencies</u></h2>
      // <h3><ul>
      //   { classProficienciesNames.map((classProficienciesName, index) => {
      //     const classProficienciesURL = classProficienciesURLs[index]
      //     return (
      //       <li key={index}><a href={`${dndApiUrl}` + classProficienciesURL} target={'_blank'}>{classProficienciesName}</a></li>
      //     )
      //   }) }
      // </ul></h3>
      // <h2><u>Class proficiency choices (Choose {classProficiencyChoicesNum})</u></h2>
      // <h3><ul>
      //   { classProficiencyChoicesNames.map((classProficiencyChoicesName, index) => {
      //     const classProficiencyChoicesURL = classProficiencyChoicesURLs[index]
      //     return (
      //       <li key={index}><a href={`${dndApiUrl}` + classProficiencyChoicesURL} target={'_blank'}>{classProficiencyChoicesName}</a></li>
      //     )
      //   }) }
      // </ul></h3>
      // <h2><u>Starting Equipment URL</u></h2>
      // <h3>{ classEquipmentURL }</h3>
      // <h2><u>Subclasses URLs</u></h2>
      // <h3>{ subclassesURLs }</h3>
      // <h2><u>Levels URL</u></h2>
      // <h3>{ levelsURL }</h3>
      // </Fragment>
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

export default RaceInfo
