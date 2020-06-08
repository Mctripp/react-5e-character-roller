import React, { Fragment } from 'react'
import Dropdown from './SHARED/Dropdown'

const DevPage = () => {
  return (
    <Fragment>
      <Dropdown
        urlSuffix='races'
        resourceName='Race'
      >
      </Dropdown>
      <Dropdown
        urlSuffix='classes'
        resourceName='Class'
      >
      </Dropdown>
    </Fragment>
  )
}

export default DevPage
