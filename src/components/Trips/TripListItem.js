import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { Columns, Column, Icon } from '../Bulma'
import UnstyledLink from '../Utils/UnstyledLink'
import { setActiveTrip } from '../../redux/actions'

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #cecece;
`

const Preview = styled.img`
  width: auto;
  height: 49px;
`

const TripInformation = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
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

const JumpIcon = styled(Icon)`
  font-size: 16px;
  margin-right: 10px;
`

const TripListItem = ({ trip }) => {
    const [thumbnailPath, setThumbnailPath] = useState('')
    const dispatch = useDispatch()
    const momentDate = moment(trip.date)
    const formattedDate = momentDate.format('MMMM Do YYYY')
    const formattedTime = momentDate.format('h:mm:ss a')

    useEffect(() => {
        trip.getThumbnail().then(path => {
            console.log('got path in useEffect', path)
            setThumbnailPath(path)
        })
    })

    const handleClick = () => {
        dispatch(setActiveTrip(trip))
    }

    return (
        <Wrapper>
            <UnstyledLink to="/trip" onClick={handleClick}>
                <Columns isMobile isVerticalCentered>
                    <Column isNarrow style={{ paddingBottom: '0px', paddingRight: '0px', paddingTop: '0px' }}>
                        <Preview src={thumbnailPath} />
                    </Column>
                    <Column isNarrow style={{ paddingLeft: '0px' }}>
                        <TripInformation>
                            <Title>{formattedDate}</Title>
                            <Subtitle>{formattedTime}</Subtitle>
                            <Subtitle>{trip.duration}</Subtitle>
                        </TripInformation>
                    </Column>
                    <Column style={{ textAlign: 'right' }}>
                        <JumpIcon icon='chevron-right' />
                    </Column>
                </Columns>
            </UnstyledLink>
        </Wrapper>
    )
}

TripListItem.propTypes = {
    trip: PropTypes.object
}

export default TripListItem
