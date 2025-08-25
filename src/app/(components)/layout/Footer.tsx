import React from 'react'

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: 'Credit Reports', href: '#' },
      { name: 'Compliance Tools', href: '#' },
      { name: 'API Integration', href: '#' },
      { name: 'Pricing', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Press', href: '#' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Support Center', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' }
    ]
  }

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">LASER</h3>
            <p className="text-brand-blue-ultralight text-sm leading-relaxed">
              The #1 Salesforce-native app for instant, accurate, and fully integrated credit and compliance reporting.
            </p>
          </div>

          {/* Footer Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-heading font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-brand-blue-ultralight hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-brand-gray text-sm">
            © 2025 LASER Credit Access. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer