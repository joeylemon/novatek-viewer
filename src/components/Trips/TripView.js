import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const TripView = () => {
    const activeTrip = useSelector(state => state.activeTrip)
    const { formattedStartDate, formattedStartTime, formattedEndTime, duration } = activeTrip.getDateInformation()

    return (
        <Wrapper>
            <p>{formattedStartDate} from {formattedStartTime} to {formattedEndTime}</p>
            <p>{duration}</p>
        </Wrapper>
    )
}

export default TripView
