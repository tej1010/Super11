import { motion } from 'motion/react';
import { Shield, Zap, Users, Gift, TrendingUp, Wallet } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: "Real-time Updates",
      description: "Get lightning-fast score updates and live leaderboard rankings as the match progresses."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "100% Secure",
      description: "Your data and transactions are protected with bank-grade encryption and security protocols."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Private Contests",
      description: "Create private leagues and invite your friends for a more personalized gaming experience."
    },
    {
      icon: <Gift className="w-8 h-8 text-red-600" />,
      title: "Daily Rewards",
      description: "Log in daily to claim bonuses, free entry tickets, and exclusive promotional offers."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Expert Insights",
      description: "Access detailed player stats, pitch reports, and expert analysis to build your winning team."
    },
    {
      icon: <Wallet className="w-8 h-8 text-red-600" />,
      title: "Instant Withdrawals",
      description: "Withdraw your winnings instantly to your bank account or UPI with zero hassle."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Why Choose <span className="text-red-600">Scream 11?</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide the most immersive and rewarding fantasy sports experience in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-red-900/20 p-8 rounded-3xl hover:border-red-600 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
