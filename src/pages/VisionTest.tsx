
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  Eye, 
  CheckCircle2, 
  XCircle,
  Info
} from 'lucide-react';
import TestCard from "../components/TestCard";
import TestIntro from "../components/TestIntro";
import TestResults from "../components/TestResults";
import { useToast } from "@/hooks/use-toast";

type TestStage = 'intro' | 'calibration' | 'acuity' | 'astigmatism' | 'color' | 'results';

const VisionTest = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [stage, setStage] = useState<TestStage>('intro');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState({
    acuity: { right: 0, left: 0 },
    astigmatism: { right: false, left: false },
    colorVision: 'normal',
    estimatedPrescription: { right: '', left: '' }
  });
  
  // Update progress based on current stage
  useEffect(() => {
    switch(stage) {
      case 'intro':
        setProgress(0);
        break;
      case 'calibration':
        setProgress(10);
        break;
      case 'acuity':
        setProgress(40);
        break;
      case 'astigmatism':
        setProgress(70);
        break;
      case 'color':
        setProgress(90);
        break;
      case 'results':
        setProgress(100);
        toast({
          title: "Test Completed!",
          description: "Your vision test results are ready to view.",
        });
        break;
      default:
        setProgress(0);
    }
  }, [stage, toast]);

  const handleStartTest = () => {
    setStage('calibration');
  };

  const handleNextStage = () => {
    switch(stage) {
      case 'calibration':
        setStage('acuity');
        break;
      case 'acuity':
        setStage('astigmatism');
        break;
      case 'astigmatism':
        setStage('color');
        break;
      case 'color':
        // Simulate test results
        setResults({
          acuity: { right: 20, left: 25 },
          astigmatism: { right: true, left: false },
          colorVision: 'normal',
          estimatedPrescription: { right: '-1.25', left: '-1.00' }
        });
        setStage('results');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-brand-blue" />
            <span className="font-bold text-xl md:text-2xl text-brand-dark-blue">BlinkLens</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-brand-blue hover:text-brand-dark-blue"
              onClick={() => navigate('/')}
            >
              Exit Test
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Test Progress</span>
              <span className="text-sm font-medium text-brand-blue">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="glass-card p-6 md:p-8 rounded-2xl">
            {stage === 'intro' && (
              <TestIntro onStart={handleStartTest} />
            )}

            {stage === 'calibration' && (
              <TestCard
                title="Device Calibration"
                instruction="Let's make sure your device is set up correctly for accurate results."
                icon={<Info className="h-8 w-8 text-brand-blue" />}
                onNext={handleNextStage}
                content={
                  <div className="space-y-6">
                    <p>Please follow these steps:</p>
                    <ol className="list-decimal list-inside space-y-4">
                      <li>Position yourself about 2 feet (arm's length) from your screen</li>
                      <li>Make sure you're in a well-lit room without glare on your screen</li>
                      <li>If you wear glasses or contacts, keep them on for this test</li>
                      <li>Remove any blue light filters from your device for accurate color testing</li>
                    </ol>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-sm text-gray-600">This test is designed to provide an estimate and is not a replacement for a professional eye exam.</p>
                    </div>
                  </div>
                }
              />
            )}

            {stage === 'acuity' && (
              <TestCard
                title="Visual Acuity Test"
                instruction="Can you identify the direction of the letters?"
                icon={<Eye className="h-8 w-8 text-brand-blue" />}
                onNext={handleNextStage}
                content={
                  <div className="space-y-8">
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-inner">
                      <div className="text-9xl font-bold text-gray-800">E</div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      {['up', 'right', 'down', 'left'].map((direction) => (
                        <Button 
                          key={direction}
                          variant="outline"
                          className="py-8"
                          onClick={() => {
                            toast({
                              title: "Response Recorded",
                              description: `You selected: ${direction}`,
                            });
                          }}
                        >
                          {direction === 'up' && '↑'}
                          {direction === 'right' && '→'}
                          {direction === 'down' && '↓'}
                          {direction === 'left' && '←'}
                        </Button>
                      ))}
                    </div>
                  </div>
                }
              />
            )}

            {stage === 'astigmatism' && (
              <TestCard
                title="Astigmatism Test"
                instruction="Which line appears darker and more distinct?"
                icon={<Eye className="h-8 w-8 text-brand-blue" />}
                onNext={handleNextStage}
                content={
                  <div className="space-y-8">
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-inner">
                      <div className="relative w-64 h-64">
                        {[0, 30, 60, 90, 120, 150].map((degree) => (
                          <div 
                            key={degree}
                            className="absolute top-1/2 left-1/2 w-full h-0.5 bg-black"
                            style={{ 
                              transform: `translate(-50%, -50%) rotate(${degree}deg)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant="outline"
                        className="py-4"
                        onClick={() => {
                          toast({
                            title: "Response Recorded",
                            description: "You selected: horizontal lines",
                          });
                        }}
                      >
                        Horizontal lines are darker
                      </Button>
                      <Button 
                        variant="outline"
                        className="py-4"
                        onClick={() => {
                          toast({
                            title: "Response Recorded",
                            description: "You selected: vertical lines",
                          });
                        }}
                      >
                        Vertical lines are darker
                      </Button>
                    </div>
                  </div>
                }
              />
            )}

            {stage === 'color' && (
              <TestCard
                title="Color Vision Test"
                instruction="What number do you see in the image?"
                icon={<Eye className="h-8 w-8 text-brand-blue" />}
                onNext={handleNextStage}
                content={
                  <div className="space-y-8">
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-inner">
                      <div className="w-64 h-64 bg-green-100 rounded-full flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0">
                          {/* Simulated Ishihara test pattern */}
                          {Array.from({ length: 200 }).map((_, i) => (
                            <div 
                              key={i}
                              className="absolute rounded-full"
                              style={{
                                width: `${Math.random() * 15 + 5}px`,
                                height: `${Math.random() * 15 + 5}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                backgroundColor: Math.random() > 0.5 ? '#FF6B6B' : '#83C5BE',
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-6xl font-bold relative z-10 text-red-500/80">7</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                      {[3, 5, 7, 8, 9].map((num) => (
                        <Button 
                          key={num}
                          variant="outline"
                          onClick={() => {
                            toast({
                              title: "Response Recorded",
                              description: `You selected: ${num}`,
                            });
                          }}
                        >
                          {num}
                        </Button>
                      ))}
                    </div>
                  </div>
                }
              />
            )}

            {stage === 'results' && (
              <TestResults results={results} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VisionTest;
