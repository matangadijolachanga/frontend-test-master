import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './index.css'

const Button = props => props.type === 'link' ? (
    <Link 
        className={ `btn btn-${ props.color } btn-${ props.size }`}
        to={ props.href }
        disabled= { props.disabled }
    >
        { props.text }
    </Link>
) : (
    <button
        className={ `${ props.defaultStyle ? `btn btn-${ props.size }` : '' } btn-${ props.color } cursor-pointer ${ props.className }`}
        type="button"
        disabled= { props.disabled }
        onClick={ props.onClick }
    >
        { props.text }
    </button>
)

Button.propTypes = {
    type: PropTypes.string || PropTypes.object,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    href: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: 'button',
    color: 'primary',
    defaultStyle: true,
    size: 'default',
    disabled: false
}

export default Button

