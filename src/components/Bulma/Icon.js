import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, style, icon, spin }) => {
    let faClass = `fas fa-${icon}`
    if (spin) faClass += ' fa-spin'

    return (
        <span className={'icon ' + className} style={style}>
            <i className={faClass}></i>
        </span>
    )
}

Icon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.string,
    spin: PropTypes.bool
}

export default Icon
