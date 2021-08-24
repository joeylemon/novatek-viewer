import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, style, icon }) => {
    return (
        <span className={'icon ' + className} style={style}>
            <i className={`fas fa-${icon}`}></i>
        </span>
    )
}

Icon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.string
}

export default Icon
