import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import TripListItem from '../TripListItem'

const Wrapper = styled.div`
  width: 100%;
`

const TripList = (props) => {
    const trips = useSelector(state => state.trips)
    console.log(trips)
    return (
        <Wrapper>
            { trips.map((trip, i) => <TripListItem key={i} trip={trip} />) }
        </Wrapper>
    )
}

export default TripList
