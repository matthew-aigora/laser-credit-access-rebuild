import Button from "./(components)/ui/Button";
import Card from "./(components)/ui/Card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              The Credit Lifecycle in Salesforce. Access, Decide, Comply—All in Salesforce.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-brand-blue-ultralight">
              LASER Credit Access empowers you to ACCESS the data, DECIDE with confidence, and COMPLY without effort.
            </p>
            <div className="flex justify-center">
              <Button variant="primary" className="text-lg px-8 py-4">
                See the Full Platform in Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-blue mb-8">
              Integrated with all three major credit bureaus
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-brand-gray text-3xl md:text-4xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
                Experian
              </div>
              <div className="text-brand-gray text-3xl md:text-4xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
                TransUnion
              </div>
              <div className="text-brand-gray text-3xl md:text-4xl font-semibold opacity-70 hover:opacity-100 transition-opacity">
                Equifax
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Platform Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-brand-blue mb-12">
            A Unified Platform for the Complete Credit Lifecycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="ACCESS">
              <p>
                A Complete Financial Picture, Instantly. Securely bring real-time credit, income, and banking data directly into your Salesforce records. Eliminate manual data entry and get the fuel you need to make informed decisions in seconds.
              </p>
            </Card>
            <Card title="DECIDE">
              <p>
                Decisions, Accelerated and Assured. Leverage our powerful rules engine to automate your underwriting criteria. Get instant decisioning assistance, ensure consistency across your team, and increase your lending velocity.
              </p>
            </Card>
            <Card title="COMPLY">
              <p>
                Compliance, Built-In, Not Bolted-On. Operate with total confidence. From upfront AML/KYC verification to continuous, audit-ready tracking of ECOA and FTC Safeguards, our platform turns your biggest compliance risks into an automated, background process.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A complete suite of tools to handle all your credit and compliance needs, built natively for the Salesforce ecosystem.
            </p>
          </div>

          {/* Solution 1: LASER Credit Access - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-600 text-lg">LASER Credit Access Image</span>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">LASER Credit Access</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                The flagship application for pulling consumer credit reports and running compliance checks directly within Salesforce.
              </p>
            </div>
          </div>

          {/* Solution 2: LASER Business Credit - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">LASER Business Credit</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Access comprehensive business credit reports to make informed B2B lending decisions with confidence and full compliance.
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-600 text-lg">LASER Business Credit Image</span>
            </div>
          </div>

          {/* Solution 3: LASER Financial Account Access - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-600 text-lg">Financial Account Access Image</span>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">LASER Financial Account Access</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Go beyond the credit report by securely accessing open banking and income data through providers like Plaid.
              </p>
            </div>
          </div>

          {/* Solution 4: LASER Credit Union - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">LASER Credit Union</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Enhance your credit decisioning with powerful, data-driven attributes. This application is a key component for automating underwriting and risk.
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-600 text-lg">LASER Credit Union Image</span>
            </div>
          </div>

          {/* Solution 5: LASER Personal Cash Flow - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-600 text-lg">Personal Cash Flow Image</span>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">LASER Personal Cash Flow</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Automate complex cash flow analysis for superior decisioning. This application combines the borrower's credit report debt with their bank.
              </p>
            </div>
          </div>

          {/* Solution 6: Custom Solutions - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">Custom Solutions</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Work with our team to build a custom credit reporting solution tailored to your unique business requirements.
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-600 text-lg">Custom Solutions Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to streamline your credit lifecycle?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 opacity-95">
            Schedule a free, no-obligation demo with our team today.
          </p>
          <Button variant="secondary" className="text-lg px-8 py-4">
            Schedule a Compliance Discussion
          </Button>
        </div>
      </section>
    </div>
  );
}
