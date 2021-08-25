import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const EmptyPreview = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`

const Preview = styled.img`
  width: 100%;
  height: 100%;
`

const ImagePreview = ({ className, style, src }) => {
    return (
        <div>
            { (src === undefined || src === '') ? <EmptyPreview className={className} style={style} /> : <Preview className={className} style={style} src={src} /> }
        </div>
    )
}

ImagePreview.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    src: PropTypes.string
}

export default ImagePreview
