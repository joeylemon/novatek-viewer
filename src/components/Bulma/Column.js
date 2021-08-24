import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ className, children, style, isNarrow }) => {
    const classes = ['column']
    if (className) classes.push(className)
    if (isNarrow) classes.push('is-narrow')

    return (
        <div className={classes.join(' ')} style={style}>
            {children}
        </div>
    )
}

Column.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    isNarrow: PropTypes.bool
}

export default Column
