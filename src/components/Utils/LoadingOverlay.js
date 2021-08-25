import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../Bulma'

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadingOverlay = ({ className, style }) => {
    return (
        <Overlay className={className} style={style}>
            <Icon icon="spinner" spin={true} style={{ color: 'white', fontSize: '32px' }} />
        </Overlay>
    )
}

LoadingOverlay.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
}

export default LoadingOverlay
