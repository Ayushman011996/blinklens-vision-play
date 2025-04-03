
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Eye, Target, Gamepad2 } from 'lucide-react';

interface GameScore {
  game: string;
  score: number;
  maxScore: number;
}

const EyeTestGames: React.FC = () => {
  const { toast } = useToast();
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [gameScores, setGameScores] = useState<GameScore[]>([]);
  const [showGameDialog, setShowGameDialog] = useState(false);

  const games = [
    {
      id: "spot-difference",
      name: "Spot the Difference",
      description: "Find the subtle differences between two images to test your visual perception.",
      icon: <Eye className="h-6 w-6 text-brand-blue" />,
      component: <SpotDifferenceGame onComplete={handleGameComplete} />
    },
    {
      id: "follow-target",
      name: "Follow the Target",
      description: "Follow a moving target with your eyes to test tracking and focus speed.",
      icon: <Target className="h-6 w-6 text-brand-blue" />,
      component: <FollowTargetGame onComplete={handleGameComplete} />
    },
    {
      id: "peripheral-vision",
      name: "Peripheral Vision Test",
      description: "Identify objects appearing at the edges of your vision.",
      icon: <Gamepad2 className="h-6 w-6 text-brand-blue" />,
      component: <PeripheralVisionGame onComplete={handleGameComplete} />
    }
  ];

  function handleGameComplete(game: string, score: number, maxScore: number) {
    const newScore = { game, score, maxScore };
    setGameScores(prev => [...prev.filter(s => s.game !== game), newScore]);
    toast({
      title: "Game Completed!",
      description: `You scored ${score} out of ${maxScore}`,
    });
    setShowGameDialog(false);
    setActiveGame(null);
  }

  function startGame(gameId: string) {
    setActiveGame(gameId);
    setShowGameDialog(true);
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Eye Test Games</h2>
        <p className="text-gray-600">
          These interactive games help test different aspects of your vision while being fun!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              {game.icon}
              <h3 className="font-bold text-lg text-gray-800">{game.name}</h3>
            </div>
            <p className="text-gray-600 mb-6 h-20">{game.description}</p>
            
            {gameScores.find(s => s.game === game.id) && (
              <div className="mb-4 text-sm">
                <p className="text-brand-blue font-medium">
                  Your score: {gameScores.find(s => s.game === game.id)?.score} / 
                  {gameScores.find(s => s.game === game.id)?.maxScore}
                </p>
              </div>
            )}
            
            <Button 
              onClick={() => startGame(game.id)}
              className="w-full bg-brand-blue hover:bg-brand-dark-blue"
            >
              {gameScores.find(s => s.game === game.id) ? "Play Again" : "Start Game"}
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={showGameDialog} onOpenChange={setShowGameDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {games.find(g => g.id === activeGame)?.name || "Eye Test Game"}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {activeGame && games.find(g => g.id === activeGame)?.component}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Individual game components
const SpotDifferenceGame: React.FC<{onComplete: (game: string, score: number, maxScore: number) => void}> = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [maxScore] = useState(5);
  const [round, setRound] = useState(1);
  const [foundDifferences, setFoundDifferences] = useState<number[]>([]);
  
  const differences = [
    { top: '25%', left: '35%' },
    { top: '40%', left: '60%' },
    { top: '75%', left: '20%' },
    { top: '60%', left: '80%' },
    { top: '30%', left: '70%' }
  ];
  
  const handleSpotClick = (index: number) => {
    if (!foundDifferences.includes(index)) {
      setScore(prev => prev + 1);
      setFoundDifferences(prev => [...prev, index]);
      
      if (foundDifferences.length + 1 === maxScore) {
        setTimeout(() => {
          onComplete("spot-difference", score + 1, maxScore);
        }, 1000);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-lg font-medium">
          Find 5 differences between these two images
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Score: {score}/{maxScore}
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-4 h-[300px]">
        <div className="relative bg-blue-100 rounded-md overflow-hidden">
          {/* Base image - this is a simple colored background for demo */}
          <div className="absolute inset-0 bg-blue-100"></div>
          
          {/* Sample elements that would be identical in both images */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-400 rounded-md transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-blue-500 rounded-full"></div>
        </div>
        
        <div className="relative bg-blue-100 rounded-md overflow-hidden">
          {/* Second image with subtle differences */}
          <div className="absolute inset-0 bg-blue-100"></div>
          
          {/* Same base elements */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-400 rounded-md transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-blue-500 rounded-full"></div>
          
          {/* Interactive difference spots */}
          {differences.map((pos, index) => (
            <button
              key={index}
              className={`absolute w-5 h-5 rounded-full ${
                foundDifferences.includes(index) 
                  ? 'bg-green-500 animate-pulse' 
                  : 'bg-transparent hover:bg-red-200/20'
              }`}
              style={{ top: pos.top, left: pos.left }}
              onClick={() => handleSpotClick(index)}
              aria-label={`Difference spot ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Click on the areas where you spot differences in the right image
        </p>
      </div>
    </div>
  );
};

const FollowTargetGame: React.FC<{onComplete: (game: string, score: number, maxScore: number) => void}> = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [maxScore] = useState(10);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isActive, setIsActive] = useState(true);
  const [remainingTargets, setRemainingTargets] = useState(maxScore);
  
  const moveTarget = () => {
    if (remainingTargets > 0) {
      const newX = Math.random() * 80 + 10; // 10-90%
      const newY = Math.random() * 80 + 10; // 10-90%
      setPosition({ x: newX, y: newY });
      setIsActive(true);
    } else {
      onComplete("follow-target", score, maxScore);
    }
  };
  
  const handleClick = () => {
    if (isActive) {
      setScore(prev => prev + 1);
      setIsActive(false);
      setRemainingTargets(prev => prev - 1);
      
      if (remainingTargets > 1) {
        setTimeout(moveTarget, 500);
      } else {
        setTimeout(() => {
          onComplete("follow-target", score + 1, maxScore);
        }, 1000);
      }
    }
  };
  
  // Start the game
  React.useEffect(() => {
    moveTarget();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <p className="text-lg font-medium">Follow and click the target</p>
        <p className="text-sm text-gray-600 mt-1">
          Remaining: {remainingTargets} | Score: {score}/{maxScore}
        </p>
      </div>
      
      <div className="relative h-[400px] bg-blue-50 rounded-lg">
        {isActive && (
          <button
            className="absolute w-8 h-8 bg-brand-blue rounded-full animate-pulse flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
            onClick={handleClick}
          >
            <Target className="h-5 w-5 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

const PeripheralVisionGame: React.FC<{onComplete: (game: string, score: number, maxScore: number) => void}> = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [maxScore] = useState(10);
  const [round, setRound] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [position, setPosition] = useState('');
  const [showSymbol, setShowSymbol] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  
  const symbols = ['▲', '■', '●', '◆', '✚'];
  const positions = ['top-1 left-1/2', 'top-1/2 left-1', 'bottom-1 left-1/2', 'top-1/2 right-1', 'top-1/4 left-1/4', 'top-1/4 right-1/4', 'bottom-1/4 left-1/4', 'bottom-1/4 right-1/4'];
  
  const startGame = () => {
    setGameStarted(true);
    nextRound();
  };
  
  const nextRound = () => {
    if (round < maxScore) {
      const nextRound = round + 1;
      setRound(nextRound);
      
      // Set random symbol and position
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
      
      setSymbol(randomSymbol);
      setPosition(randomPosition);
      
      // Show symbol briefly
      setShowSymbol(true);
      setTimeout(() => {
        setShowSymbol(false);
      }, 800);
    } else {
      onComplete("peripheral-vision", score, maxScore);
    }
  };
  
  const handleAnswer = (answer: string) => {
    if (answer === symbol) {
      setScore(prev => prev + 1);
    }
    
    setTimeout(nextRound, 500);
  };
  
  if (!gameStarted) {
    return (
      <div className="text-center p-6">
        <p className="mb-4">
          Focus on the center cross. Symbols will briefly appear in your peripheral vision.
          Identify which symbol you saw.
        </p>
        <Button onClick={startGame} className="bg-brand-blue hover:bg-brand-dark-blue">
          Start Game
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <p className="text-lg font-medium">Peripheral Vision Test</p>
        <p className="text-sm text-gray-600 mt-1">
          Round: {round}/{maxScore} | Score: {score}
        </p>
      </div>
      
      <div className="relative h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
        {/* Center focus point */}
        <div className="text-2xl font-bold text-brand-blue">+</div>
        
        {/* Peripheral symbol */}
        {showSymbol && (
          <div className={`absolute text-3xl font-bold text-brand-blue ${position}`}>
            {symbol}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        {symbols.map((sym) => (
          <Button
            key={sym}
            onClick={() => handleAnswer(sym)}
            className="text-xl h-12 w-full bg-white border border-gray-200 text-gray-800 hover:bg-gray-100"
          >
            {sym}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EyeTestGames;
