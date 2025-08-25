import React from 'react'

interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {title && (
        <h3 className="text-xl font-heading font-bold text-brand-blue mb-4">{title}</h3>
      )}
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  )
}

export default Card