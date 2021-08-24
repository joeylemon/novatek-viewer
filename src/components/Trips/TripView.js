import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const TripView = () => {
    const activeTrip = useSelector(state => state.activeTrip)
    console.log(activeTrip)
    return (
        <Wrapper>
            <p>{activeTrip.date.toString()}</p>
            <p>{activeTrip.duration}</p>
        </Wrapper>
    )
}

export default TripView
