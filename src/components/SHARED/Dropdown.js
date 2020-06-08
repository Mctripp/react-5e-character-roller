import React, { Fragment } from 'react'
import axios from 'axios'
// import apiUrl from './../../apiConfig'

const Dropdown = ({ urlSuffix, resourceName }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [resource, setResource] = React.useState([])

  React.useEffect(() => {
    axios({
      url: `https://www.dnd5eapi.co/api/${urlSuffix}`
    })
      .then(res => {
        setResource(res.data.results.map(result => {
          return result.name
        }))
      })
      .then(setIsLoaded(true))
      .catch(console.error)
  }, [])

  if (isLoaded) {
    return (
      <Fragment>
        <select>
          <option>{ resourceName }</option>
          ({resource.map((item, idx) => {
            return (<option key={idx} value={item.toLowerCase()}>{item}</option>)
          })})
        </select>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <select>
          <option>Loading...</option>
        </select>
      </Fragment>
    )
  }
}

export default Dropdown
