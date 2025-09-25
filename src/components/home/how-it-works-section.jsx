"use client";

const steps = [
  {
    number: "01",
    title: "Sign Up & Create Profile",
    description:
      "Join our platform and set up your career profile with your goals and current status.",
  },
  {
    number: "02",
    title: "Choose Your Services",
    description:
      "Select from our range of career services tailored to your specific needs and goals.",
  },
  {
    number: "03",
    title: "Get Expert Feedback",
    description:
      "Receive detailed analysis and actionable feedback from our AI and career experts.",
  },
  {
    number: "04",
    title: "Implement & Improve",
    description:
      "Apply the recommendations and track your progress with our performance analytics.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-down">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Simple steps to transform your career prospects
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg animate-pop-in">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
