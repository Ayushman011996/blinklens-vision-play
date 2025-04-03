
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ExternalLink, Download, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface TestResultsProps {
  results: {
    acuity: { right: number; left: number };
    astigmatism: { right: boolean; left: boolean };
    colorVision: string;
    estimatedPrescription: { right: string; left: string };
  };
}

const TestResults: React.FC<TestResultsProps> = ({ results }) => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-2 heading-gradient">Your Results</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your responses, we've generated an estimated analysis of your vision. Remember, this is not a medical diagnosis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Vision Acuity</CardTitle>
            <CardDescription>How clear your vision is at a distance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Right Eye</p>
                <p className="text-2xl font-bold">{results.acuity.right}/20</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Left Eye</p>
                <p className="text-2xl font-bold">{results.acuity.left}/20</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-gray-500">
            20/20 is considered normal vision
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estimated Prescription</CardTitle>
            <CardDescription>Approximate lens power</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Right Eye (OD)</p>
                <p className="text-2xl font-bold">{results.estimatedPrescription.right}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Left Eye (OS)</p>
                <p className="text-2xl font-bold">{results.estimatedPrescription.left}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-gray-500">
            Negative numbers indicate nearsightedness
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Astigmatism Detection</CardTitle>
            <CardDescription>Uneven curvature of the eye</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Right Eye</p>
                {results.astigmatism.right ? (
                  <div className="flex items-center mt-1 text-amber-600">
                    <CheckCircle2 className="h-5 w-5 mr-1" />
                    <span>Detected</span>
                  </div>
                ) : (
                  <div className="flex items-center mt-1 text-green-600">
                    <XCircle className="h-5 w-5 mr-1" />
                    <span>Not Detected</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Left Eye</p>
                {results.astigmatism.left ? (
                  <div className="flex items-center mt-1 text-amber-600">
                    <CheckCircle2 className="h-5 w-5 mr-1" />
                    <span>Detected</span>
                  </div>
                ) : (
                  <div className="flex items-center mt-1 text-green-600">
                    <XCircle className="h-5 w-5 mr-1" />
                    <span>Not Detected</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color Vision</CardTitle>
            <CardDescription>Ability to distinguish colors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">{results.colorVision}</p>
              <p className="text-sm text-gray-600 mt-2">
                Your color vision appears to be normal, with no significant deficiencies detected.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
        <h3 className="font-bold text-xl mb-3">What Next?</h3>
        <p className="mb-4">
          This test provides an estimate only and is not a substitute for a comprehensive eye examination. 
          We recommend scheduling an appointment with an eye care professional to verify these results.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="gap-2">
            <Download size={16} /> Download Results
          </Button>
          <Button variant="outline" className="gap-2">
            <Share2 size={16} /> Share Results
          </Button>
          <Button variant="default" className="gap-2 bg-brand-blue hover:bg-brand-dark-blue">
            <ExternalLink size={16} /> Find Eye Doctor Near You
          </Button>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default TestResults;
