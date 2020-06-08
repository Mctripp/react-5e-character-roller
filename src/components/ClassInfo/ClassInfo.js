import React, { Fragment } from 'react'
import ClassEquipment from './ClassEquipment/ClassEquipment'
import ClassProficiencies from './ClassProficiencies/ClassProficiencies'
import ClassProficiencyChoices from './ClassProficiencyChoices/ClassProficiencyChoices'
import Levels from './Levels/Levels'
import SavingThrows from './SavingThrows/SavingThrows'
import Subclasses from './Subclasses/Subclasses'
import dndApiUrl from './../../dndApiConfig'

const ClassInfo = ({ className }) => {
  const [classEquipment, setClassEquipment] = ([])
  const [classProficiencies, setClassProficiencies] = ([])
  const [classProficiencyChoices, setClassProficiencyChoices] = ([])
  const [levels, setLevels] = ([])
  const [savingThrows, setSavingThrows] = ([])
  const [subclasses, setSubclasses] = ([])

  React.useEffect(() => {
    axios({
      url: `${dndApiUrl}classes/${{ className }}`
    })
      .then(res => {
        setResource(res.data.results.map(result => {
          return result.name
        }))
      })
      .then(setIsLoaded(true))
      .catch(console.error)
  }, [])

  return (

  )
}

export default ClassInfo
