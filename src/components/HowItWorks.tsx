
import React from 'react';
import { Monitor, Eye, Sliders, FileCheck } from 'lucide-react';
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    icon: Monitor,
    title: "Set Up Your Device",
    description: "Position yourself about 2 feet away from your screen in a well-lit room."
  },
  {
    id: 2,
    icon: Eye,
    title: "Take the Vision Game",
    description: "Follow the interactive prompts and respond to different visual tests."
  },
  {
    id: 3,
    icon: Sliders,
    title: "AI Analysis",
    description: "Our AI processes your responses to assess visual acuity and estimate lens power."
  },
  {
    id: 4,
    icon: FileCheck,
    title: "Get Your Results",
    description: "Receive a comprehensive report with your estimated prescription and recommendations."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-brand-light-gray section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            How BlinkLens Works
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered vision test combines advanced technology with simplicity to give you accurate results in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={cn(
                "glass-card rounded-xl p-6 relative overflow-hidden",
                "transform transition-transform hover:scale-105 duration-300",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10",
                index % 2 === 0 ? "bg-brand-blue" : "bg-brand-teal"
              )}></div>
              
              <div className="relative z-10">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md mb-6">
                  <step.icon className="h-6 w-6 text-brand-blue" />
                </div>
                
                <span className="inline-block text-sm font-medium bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full mb-4">
                  Step {step.id}
                </span>
                
                <h3 className="text-xl font-bold mb-2 text-brand-dark-gray">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-6 text-center">
          <p className="text-brand-dark-blue font-medium">
            Most users complete their vision test in just 5-7 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
