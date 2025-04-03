
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Clock, Shield, Award } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TestIntroProps {
  onStart: () => void;
}

const TestIntro: React.FC<TestIntroProps> = ({ onStart }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Eye className="h-12 w-12 text-brand-blue mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
          BlinkLens Vision Test
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This interactive test will help estimate your visual acuity, detect potential astigmatism, 
          and check for color vision deficiencies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Clock,
            title: "5 Minutes",
            description: "Quick test you can complete in just 5 minutes"
          },
          {
            icon: Shield,
            title: "Clinically Informed",
            description: "Based on standard optometric testing protocols"
          },
          {
            icon: Award,
            title: "AI Analysis",
            description: "Advanced algorithms analyze your responses"
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className={cn(
              "p-4 rounded-lg border border-blue-100 bg-blue-50",
              "flex items-start gap-3"
            )}
          >
            <div className="bg-white rounded-full p-2">
              <feature.icon className="h-5 w-5 text-brand-blue" />
            </div>
            <div>
              <h3 className="font-medium">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
        <p className="text-sm text-amber-800">
          <strong>Important:</strong> This test is not a replacement for a comprehensive eye exam by an eye care professional. 
          Results should be verified by an optometrist or ophthalmologist.
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <p className="text-sm text-gray-500 italic">
          Before you start, make sure you're in a well-lit room and sitting about 2 feet (arm's length) from your screen.
        </p>
        <Button 
          onClick={onStart}
          size="lg" 
          className="w-full md:w-auto md:self-center bg-brand-blue hover:bg-brand-dark-blue"
        >
          Start Vision Test <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestIntro;
