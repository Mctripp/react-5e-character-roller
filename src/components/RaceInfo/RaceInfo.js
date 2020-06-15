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
  const [raceSpeed, setRaceSpeed] = React.useState(null)
  const [raceAlignment, setRaceAlignment] = React.useState('')
  const [raceAge, setRaceAge] = React.useState('')
  const [raceSize, setRaceSize] = React.useState('')
  const [raceSizeDescription, setRaceSizeDescription] = React.useState('')
  const [raceStartingProficienciesNames, setRaceStartingProficienciesNames] = React.useState([])
  const [raceStartingProficienciesURLs, setRaceStartingProficienciesURLs] = React.useState([])
  const [raceLanguagesNames, setRaceLanguagesNames] = React.useState([])
  const [raceLanguagesURLs, setRaceLanguagesURLs] = React.useState([])
  const [raceLanguageDesc, setRaceLanguageDesc] = React.useState('')
  const [raceLanguageOptionsChoose, setRaceLanguageOptionsChoose] = React.useState('')
  const [raceLanguageOptionsNames, setRaceLanguageOptionsNames] = React.useState([])
  const [raceLanguageOptionsURLs, setRaceLanguageOptionsURLs] = React.useState([])
  const [raceTraitsNames, setRaceTraitsNames] = React.useState([])
  const [raceTraitsURLs, setRaceTraitsURLs] = React.useState([])
  // const [raceTraitOptionsChoose, setRaceTraitOptionsChoose] = React.useState(null)
  // const [raceTraitOptionsNames, setRaceTraitOptionsNames] = React.useState([])
  // const [raceTraitOptionsURLs, setRaceTraitOptionsURLs] = React.useState([])
  const [raceSubracesURLs, setRaceSubracesURLs] = React.useState([])
  const [raceSubracesNames, setRaceSubracesNames] = React.useState([])

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
        // Speed
        setRaceSpeed(res.data.speed)
        // Alignment
        setRaceAlignment(res.data.alignment)
        // Age
        setRaceAge(res.data.age)
        // Size
        setRaceSize(res.data.size)
        setRaceSizeDescription(res.data.size_description)
        // Starting Proficiencies
        setRaceStartingProficienciesNames(res.data.starting_proficiencies.map(startingProficiency => {
          return startingProficiency.name
        }))
        setRaceStartingProficienciesURLs(res.data.starting_proficiencies.map(startingProficiency => {
          return startingProficiency.url
        }))
        // Traits
        setRaceTraitsNames(res.data.traits.map(trait => {
          return trait.name
        }))
        setRaceTraitsURLs(res.data.traits.map(trait => {
          return trait.url
        }))
        // Subraces
        setRaceSubracesNames(res.data.subraces.map(subrace => {
          return subrace.name
        }))
        setRaceSubracesURLs(res.data.subraces.map(subrace => {
          return subrace.url
        }))
        // Languages
        setRaceLanguagesNames(res.data.languages.map(language => {
          return language.name
        }))
        setRaceLanguagesURLs(res.data.languages.map(language => {
          return language.url
        }))
        setRaceLanguageDesc(res.data.language_desc)
        setRaceLanguageOptionsChoose(res.data.language_options.choose)
        setRaceLanguageOptionsNames(res.data.language_options.from.map(languageOption => {
          return languageOption.name
        }))
        setRaceLanguageOptionsURLs(res.data.language_options.from.map(languageOption => {
          return languageOption.url
        }))
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
        <h4><u>Ability Bonuses</u></h4>
        <h5>
          <ul>
            { raceAbilityBonusesNames.map((abilityBonusName, index) => {
              const abilityBonusURL = raceAbilityBonusesURLs[index]
              const abilityBonusNum = raceAbilityBonusesNums[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + abilityBonusURL} target={'_blank'}>{abilityBonusName}: +{abilityBonusNum}</a></li>
              )
            }) }
          </ul>
        </h5>
        <h4><u>Speed</u>: {raceSpeed}</h4>
        <h4><u>Alignment</u></h4>
        <h5>{raceAlignment}</h5>
        <h4><u>Age</u></h4>
        <h5>{raceAge}</h5>
        <h4><u>Size</u>: {raceSize}</h4>
        <h5>{raceSizeDescription}</h5>
        <h4><u>Starting Proficiencies</u></h4>
        <h5>
          <ul>
            { raceStartingProficienciesNames.map((startingProficiencyName, index) => {
              const startingProficiencyURL = raceStartingProficienciesURLs[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + startingProficiencyURL} target={'_blank'}>{startingProficiencyName}</a></li>
              )
            }) }
          </ul>
        </h5>
        <h4><u>Languages</u></h4>
        <h5>
          <ul>
            { raceLanguagesNames.map((languageName, index) => {
              const languageURL = raceLanguagesURLs[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + languageURL} target={'_blank'}>{languageName}</a></li>
              )
            }) }
          </ul>
        </h5>
        <h5>{raceLanguageDesc}</h5>
        <h5>Choose {raceLanguageOptionsChoose} from:</h5>
        <h5>
          <ul>
            { raceLanguageOptionsNames.map((languageName, index) => {
              const languageURL = raceLanguageOptionsURLs[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + languageURL} target={'_blank'}>{languageName}</a></li>
              )
            }) }
          </ul>
        </h5>
        <h4><u>Traits</u></h4>
        <h5>
          <ul>
            { raceTraitsNames.map((traitName, index) => {
              const traitURL = raceTraitsURLs[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + traitURL} target={'_blank'}>{traitName}</a></li>
              )
            }) }
          </ul>
        </h5>
        <h4><u>Subraces</u></h4>
        <h5>
          <ul>
            { raceSubracesNames.map((subraceName, index) => {
              const subraceURL = raceSubracesURLs[index]
              return (
                <li key={index}><a href={`${dndApiUrl}` + subraceURL} target={'_blank'}>{subraceName}</a></li>
              )
            }) }
          </ul>
        </h5>
      </Fragment>
      // <h4><u>Class Proficiencies</u></h4>
      // <h5><ul>
      //   { classProficienciesNames.map((classProficienciesName, index) => {
      //     const classProficienciesURL = classProficienciesURLs[index]
      //     return (
      //       <li key={index}><a href={`${dndApiUrl}` + classProficienciesURL} target={'_blank'}>{classProficienciesName}</a></li>
      //     )
      //   }) }
      // </ul></h5>
      // <h4><u>Class proficiency choices (Choose {classProficiencyChoicesNum})</u></h4>
      // <h5><ul>
      //   { classProficiencyChoicesNames.map((classProficiencyChoicesName, index) => {
      //     const classProficiencyChoicesURL = classProficiencyChoicesURLs[index]
      //     return (
      //       <li key={index}><a href={`${dndApiUrl}` + classProficiencyChoicesURL} target={'_blank'}>{classProficiencyChoicesName}</a></li>
      //     )
      //   }) }
      // </ul></h5>
      // <h4><u>Starting Equipment URL</u></h4>
      // <h5>{ classEquipmentURL }</h5>
      // <h4><u>Subclasses URLs</u></h4>
      // <h5>{ subclassesURLs }</h5>
      // <h4><u>Levels URL</u></h4>
      // <h5>{ levelsURL }</h5>
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
