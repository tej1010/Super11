import { motion } from 'motion/react';
import about from '../assets/images/aboutSection.png';

export const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              About <span className="text-red-600">Scream 11</span>
            </h1>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Scream 11 was founded with a single mission: to bring sports fans closer to the games they love. We believe that every fan is an expert in their own right, and our platform gives them the stage to prove it.
              </p>
              <p>
                Since our inception in 2020, we have grown from a small startup to one of the most trusted names in fantasy sports. Our platform is built on the pillars of fairness, transparency, and technological innovation.
              </p>
              <p>
                We are committed to providing a safe and responsible gaming environment. Our fair play policies and secure transaction systems ensure that your focus remains solely on the game.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-red-900/20">
                <h3 className="text-3xl font-bold text-red-600 mb-2">2020</h3>
                <p className="text-white font-medium">Year Founded</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-2xl border border-red-900/20">
                <h3 className="text-3xl font-bold text-red-600 mb-2">500+</h3>
                <p className="text-white font-medium">Team Members</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full" />
            <img
              src={about}
              alt="Cricket Stadium"
              className="relative z-10 rounded-4xl shadow-2xl border border-red-900/30 max-w-[380px] mx-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", text: "Constantly pushing boundaries to provide the best user experience." },
              { title: "Integrity", text: "Maintaining the highest standards of fair play and transparency." },
              { title: "Community", text: "Building a global community of passionate sports enthusiasts." }
            ].map((value, i) => (
              <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl border border-red-900/10 text-center">
                <h3 className="text-xl font-bold text-red-600 mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
