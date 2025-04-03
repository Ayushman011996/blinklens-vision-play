
import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface TestCardProps {
  title: string;
  instruction: string;
  icon: ReactNode;
  content: ReactNode;
  onNext: () => void;
}

const TestCard: React.FC<TestCardProps> = ({
  title,
  instruction,
  icon,
  content,
  onNext
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">{instruction}</p>
        </div>
      </div>

      <div className="my-8">
        {content}
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={onNext} 
          className="bg-brand-blue hover:bg-brand-dark-blue"
        >
          Next <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestCard;
