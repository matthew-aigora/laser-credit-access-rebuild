import Button from "./(components)/ui/Button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
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
    </div>
  );
}
