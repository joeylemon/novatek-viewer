import React from 'react'
import styled from 'styled-components'
import StyledDropzone from '../Utils/StyledDropzone'
import getTrips from '../../services/TripService'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setTripList } from '../../redux/actions'

const Wrapper = styled.div`
  width: 100%;
  height: 240px;
  padding: 10px;
`

const TripSelector = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDrop = files => {
        console.log(files)
        const trips = getTrips(files)
        console.log(trips)
        dispatch(setTripList(trips))
        history.push('/trips')
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
