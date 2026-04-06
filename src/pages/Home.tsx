import { motion } from 'motion/react';
import { Download, Trophy, Star, ShieldCheck, HelpCircle, ChevronDown } from 'lucide-react';
import React from 'react';

export const Home = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const tournaments = [
    { name: "IPL 2024", status: "Live Now", prize: "₹10 Cr" },
    { name: "T20 World Cup", status: "Upcoming", prize: "₹25 Cr" },
    { name: "Asia Cup", status: "Upcoming", prize: "₹5 Cr" },
  ];

  const testimonials = [
    { name: "Rahul S.", city: "Mumbai", text: "Super 11 is the best fantasy app I've ever used. The interface is smooth and withdrawals are instant!", rating: 5 },
    { name: "Priya K.", city: "Delhi", text: "I won my first mega contest here. The expert analysis really helped me pick the right captain.", rating: 5 },
    { name: "Amit V.", city: "Bangalore", text: "Fair play and transparency is what keeps me coming back. Highly recommended for cricket fans.", rating: 4 },
  ];

  const faqs = [
    { q: "How do I start playing on Super 11?", a: "Simply download the APK, register with your mobile number, select a match, and create your team of 11 players." },
    { q: "Is it safe to add money?", a: "Yes, we use bank-grade security and multiple payment gateways like UPI, Net Banking, and Cards for 100% safe transactions." },
    { q: "How can I withdraw my winnings?", a: "You can withdraw your winnings instantly to your verified bank account or UPI ID once your KYC is complete." },
  ];

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                PLAY BIG, <br />
                <span className="text-red-600">WIN BIGGER</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-lg">
                Join millions of fans on Super 11. Create your dream team, compete in global leagues, and turn your sports knowledge into real rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-600/20">
                  <Download size={24} />
                  <span>Download Android APK</span>
                </button>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-bold text-white">10M+</p>
                  <p className="text-gray-500 text-sm">Active Users</p>
                </div>
                <div className="w-px h-10 bg-gray-800" />
                <div>
                  <p className="text-3xl font-bold text-white">₹50Cr+</p>
                  <p className="text-gray-500 text-sm">Daily Winnings</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-full" />
              <img
                src="https://picsum.photos/seed/cricket-match/800/1000"
                alt="Super 11 Cricket Fantasy"
                className="relative z-10 w-full max-w-md mx-auto rounded-[3rem] border-8 border-gray-900 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Top Tournaments */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Top Tournaments</h2>
              <p className="text-gray-400">Join the biggest leagues and win massive prizes.</p>
            </div>
            <button className="mt-6 md:mt-0 text-red-600 font-bold hover:underline">View All Tournaments</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-black border border-red-900/20 p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  {t.status}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                <p className="text-gray-500 mb-6">Mega Prize Pool</p>
                <p className="text-3xl font-bold text-red-600 mb-6">{t.prize}</p>
                <button className="w-full py-3 rounded-xl bg-white/5 text-white font-bold group-hover:bg-red-600 transition-colors">
                  Join Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sport */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Master of Fantasy Cricket</h2>
            <p className="text-gray-400">Experience the thrill of every boundary and wicket.</p>
          </div>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-red-600 p-12 rounded-3xl text-center group transition-all max-w-sm w-full"
            >
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-600/20">
                <Trophy className="text-white w-10 h-10" />
              </div>
              <h3 className="text-white font-bold text-3xl mb-2">Cricket</h3>
              <p className="text-gray-500">The ultimate fantasy experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">What Our Winners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-black p-8 rounded-3xl border border-red-900/10">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-red-900/20 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                >
                  <span className="text-white font-bold">{faq.q}</span>
                  <ChevronDown className={`text-red-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-black text-gray-400 border-t border-red-900/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gaming Banner */}
      <section className="py-12 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <ShieldCheck size={48} className="text-white" />
            <div>
              <h3 className="text-2xl font-bold text-white">Responsible Gaming</h3>
              <p className="text-red-100">We encourage our users to play responsibly and within their limits.</p>
            </div>
          </div>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};
