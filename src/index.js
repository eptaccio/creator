import React from 'react'
import PropTypes from 'prop-types'

const Component = ({children}) => (
  <div>
    <h1>{children}</h1>
  </div>
)

Component.propTypes = {
  children: PropTypes.string.isRequired
}

export default Component
