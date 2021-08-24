import React from 'react'
import styled from 'styled-components'
import StyledDropzone from '../Utils/StyledDropzone'
import createTrips from '../../services/TripCreator'

const Wrapper = styled.div`
  width: 100%;
  height: 240px;
  padding: 10px;
`

const TripSelector = () => {
    const handleDrop = files => {
        console.log(files)
        const creator = createTrips(files)
        console.log(creator)
    }

    return (
        <Wrapper>
            <StyledDropzone onDrop={handleDrop} accept='video/mp4'>
                <p>Drag or click to select a folder/drive containing your dashcam footage</p>
            </StyledDropzone>
        </Wrapper>
    )
}

export default TripSelector
