import React from 'react'
import PropTypes from 'prop-types'

const Columns = ({ className, children, style, isMobile, isVerticalCentered }) => {
    const classes = ['columns']
    if (className) classes.push(className)
    if (isMobile) classes.push('is-mobile')
    if (isVerticalCentered) classes.push('is-vcentered')

    return (
        <div className={classes.join(' ')} style={style}>
            {children}
        </div>
    )
}

Columns.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    isMobile: PropTypes.bool,
    isVerticalCentered: PropTypes.bool
}

export default Columns
