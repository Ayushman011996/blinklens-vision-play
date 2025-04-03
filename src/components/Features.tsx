
import React from 'react';
import { Brain, Shield, Clock, Smartphone, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description: "Our proprietary algorithms analyze visual responses with medical-grade accuracy.",
    color: "bg-blue-500"
  },
  {
    icon: Shield,
    title: "Clinically Validated",
    description: "Tested against traditional exams with 92% correlation to in-office results.",
    color: "bg-green-500"
  },
  {
    icon: Clock,
    title: "Quick & Convenient",
    description: "Complete your vision test in minutes, anytime and anywhere.",
    color: "bg-purple-500"
  },
  {
    icon: Smartphone,
    title: "Device Compatible",
    description: "Works on most modern smartphones, tablets, and computers.",
    color: "bg-orange-500"
  },
  {
    icon: Zap,
    title: "Regular Updates",
    description: "Track vision changes over time with recommended periodic testing.",
    color: "bg-red-500"
  },
  {
    icon: Award,
    title: "Prescription Ready",
    description: "Get an estimated prescription that you can verify with your eye doctor.",
    color: "bg-teal-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Features That Set Us Apart
          </h2>
          <p className="text-lg text-gray-600">
            BlinkLens combines cutting-edge technology with user-friendly design to deliver a superior vision testing experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg border border-gray-100"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
