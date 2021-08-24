import React from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { Icon } from '../Bulma'

const getColor = (props) => {
    if (props.isDragActive) {
        return '#2196f3'
    }
    return '#cacaca'
}

const Container = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #757575;
  outline: none;
  transition: border .24s ease-in-out;
  cursor: pointer;
`

const StyledIcon = styled(Icon)`
  font-size: 30px;
  margin-bottom: 10px;
`

const StyledDropzone = ({ children, onDrop, accept }) => {
    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({
        accept: accept,
        onDropAccepted: onDrop
    })

    return (
        <Container {...getRootProps({ isDragActive })}>
            <input {...getInputProps()} directory="" webkitdirectory="" />
            <StyledIcon icon='file-upload' />
            {children}
        </Container>
    )
}

StyledDropzone.propTypes = {
    children: PropTypes.node,
    onDrop: PropTypes.func,
    accept: PropTypes.string
}

export default StyledDropzone
