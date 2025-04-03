
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-teal text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Check Your Vision?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Take our free AI-powered vision test and get instant insights about your eyesight.
            No equipment needed - just your device and 5 minutes of your time.
          </p>
          <Link to="/test">
            <Button 
              size="lg" 
              className="bg-white text-brand-dark-blue hover:bg-gray-100"
            >
              Start Free Vision Test <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-sm opacity-80">
            No registration required. Results are private and not stored.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
