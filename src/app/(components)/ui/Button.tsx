import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95'
  
  const variantStyles = {
    primary: 'bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-lg focus:ring-brand-orange',
    secondary: 'bg-white text-brand-orange border border-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-lg focus:ring-brand-orange'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button