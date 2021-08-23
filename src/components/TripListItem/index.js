import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #cecece;
`

const Preview = styled.img`
  width: auto;
  height: 100%;
`

const TripInformation = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  margin-top: 3px;
`

const Title = styled.h1`
  margin: 0px;
  font-size: 16px;
  font-family: Roboto-Bold;
`

const Subtitle = styled.p`
  margin: 0px;
  font-size: 12px;
  font-family: Cabin;
`

const TripListItem = (props) => {
    const momentDate = moment(props.trip.date)
    const formattedDate = momentDate.format('MMMM Do YYYY')
    const formattedTime = momentDate.format('h:mm:ss a')

    return (
        <Wrapper>
            <Preview src='assets/test.png' />
            <TripInformation>
                <Title>{formattedDate}</Title>
                <Subtitle>{formattedTime}</Subtitle>
                <Subtitle>{props.trip.duration}</Subtitle>
            </TripInformation>
        </Wrapper>
    )
}

TripListItem.propTypes = {
    trip: PropTypes.object
}

export default TripListItem
