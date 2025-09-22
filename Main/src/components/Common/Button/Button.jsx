import React from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ 
  variant = 'primary',
  children,
  leftIcon,
  rightIcon,
  iconOnly,
  onClick,
  disabled = false,
  fullWidth = false,
  size = 'medium',
  className = '',
  ...props 
}) => {
  const buttonClass = `roo-button roo-button--${variant} roo-button--${size} ${fullWidth ? 'roo-button--full-width' : ''} ${className}`.trim()
  
  // Debug logging
  console.log('Button rendering:', { variant, size, fullWidth, className, buttonClass })

  const renderContent = () => {
    if (iconOnly && leftIcon) {
      return leftIcon
    }

    if (iconOnly && rightIcon) {
      return rightIcon
    }

    return (
      <>
        {leftIcon && <span className="roo-button__icon roo-button__icon--left">{leftIcon}</span>}
        {children && <span className="roo-button__label">{children}</span>}
        {rightIcon && <span className="roo-button__icon roo-button__icon--right">{rightIcon}</span>}
      </>
    )
  }

  return (
    <Box
      component="button"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={{
        // Debug styles to ensure visibility
        position: 'relative',
        zIndex: 1000,
        ...props.style
      }}
      {...props}
    >
      {renderContent()}
    </Box>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  iconOnly: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
}

export default Button
