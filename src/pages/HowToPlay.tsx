import { motion } from 'motion/react';
import { Search, Users, Trophy, Wallet } from 'lucide-react';

export const HowToPlay = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-red-600" />,
      title: "1. Select a Match",
      description: "Choose an upcoming cricket match from the tournament list."
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "2. Create Your Team",
      description: "Use your sports knowledge to pick the best 11 players within the given credit budget."
    },
    {
      icon: <Trophy className="w-12 h-12 text-red-600" />,
      title: "3. Join Contests",
      description: "Enter various contests ranging from free practice leagues to high-stakes mega contests."
    },
    {
      icon: <Wallet className="w-12 h-12 text-red-600" />,
      title: "4. Win Rewards",
      description: "Watch the live match, track your team's performance, and win real cash rewards."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            How to <span className="text-red-600">Play & Win</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to start your fantasy sports journey on Scream 11.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-red-900/30 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-red-900/20 p-8 rounded-3xl text-center hover:border-red-600 transition-all"
              >
                <div className="w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-red-600 rounded-[2rem] p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to show your skills?</h2>
          <p className="text-xl mb-10 opacity-90">Download the app now and get ₹100 bonus on your first match!</p>
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-900 transition-colors">
            Download App Now
          </button>
        </div>
      </div>
    </div>
  );
};
